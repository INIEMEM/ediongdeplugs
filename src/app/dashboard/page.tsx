'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";
import {
  Input,
  Row,
  Col,
  Card,
  Button,
  Typography,
  Tag,
  Image,
  Space,
} from "antd";
import { motion } from "framer-motion";
import { RegisterData } from "@/firebase/auth";

const { Title, Paragraph } = Typography;

type Talent = RegisterData & { id: string };

export default function DashboardHome() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({ skill: "", experience: "" });
  const [talents, setTalents] = useState<Talent[]>([]);
  const [filteredTalents, setFilteredTalents] = useState<Talent[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchTalents = async () => {
      try {
        const snapshot = await getDocs(collection(db, "users"));
        const list: Talent[] = snapshot.docs.map(doc => {
          const data = doc.data() as RegisterData;
          return {
            id: doc.id,
            ...data,
          };
        });
        setTalents(list);
        setFilteredTalents(list);
      } catch (err) {
        console.error("Failed to fetch talents", err);
      }
    };
    fetchTalents();
  }, []);

  useEffect(() => {
    const lowerSearch = search.toLowerCase();
    const skill = filter.skill.toLowerCase();
    const experience = parseInt(filter.experience) || 0;

    const filtered = talents.filter(talent => {
      const matchesSearch = talent.name?.toLowerCase().includes(lowerSearch);
      const matchesSkill = skill
        ? talent.skills?.some((s: string) => s.toLowerCase().includes(skill))
        : true;
      const matchesExperience = experience
        ? talent.yearsOfExperience >= experience
        : true;
      return matchesSearch && matchesSkill && matchesExperience;
    });

    setFilteredTalents(filtered);
  }, [search, filter, talents]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="p-3 lg:p-6 bg-[#f9fafb] min-h-screen"
    >
      <Title level={1} style={{ color: "#1e293b", marginBottom: 0 }}>DePlug</Title>
      <Title level={3} style={{ color: "#0f172a" }}>Discover Talents</Title>

      <Row gutter={[16, 16]} className="mb-6">
        <Col xs={24} sm={12} lg={8}>
          <Input.Search
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            enterButton
          />
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Input
            placeholder="Filter by skill"
            value={filter.skill}
            onChange={(e) => setFilter({ ...filter, skill: e.target.value })}
          />
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Input
            placeholder="Min experience (years)"
            type="number"
            value={filter.experience}
            onChange={(e) =>
              setFilter({ ...filter, experience: e.target.value })
            }
          />
        </Col>
      </Row>

      <Title level={4} style={{ marginBottom: 16, color: "#334155" }}>
        {filteredTalents.length} Talent{filteredTalents.length !== 1 ? 's' : ''}
      </Title>

      <Row gutter={[24, 24]}>
        {filteredTalents.map((talent, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card
              hoverable
              bodyStyle={{ padding: "12px" }}
              style={{ borderRadius: "12px", boxShadow: "0 4px 8px rgba(0,0,0,0.05)" }}
              cover={
                <Image
                  alt="profile"
                  height={220}
                  src={talent.profilePictureUrl || "/default-avatar.png"}
                  style={{ objectFit: "cover", borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}
                />
              }
              actions={[
                <Button
                  type="primary"
                  key="hire"
                  onClick={() => {
                    const subject = encodeURIComponent("Opportunity to Work With Us");
                    const body = encodeURIComponent(
                      `Hi ${talent.name},\n\nI came across your profile and I'm interested in discussing a potential opportunity with you.\n\nBest regards,\n[Your Name]`
                    );
                    window.location.href = `mailto:${talent.email}?subject=${subject}&body=${body}`;
                  }}
                >
                  Hire
                </Button>,
                <Button
                  key="view"
                  type="link"
                  onClick={() => router.push(`/dashboard/profile/${talent.id}`)}
                >
                  View Profile
                </Button>,
              ]}
            >
              <Space direction="vertical" size={4} style={{ width: "100%" }}>
                <Title level={5} style={{ marginBottom: 0 }}>{talent.name}</Title>
                <Paragraph style={{ fontSize: 13, margin: 0, color: "#475569" }}>
                  {talent.description.slice(0, 100)}...
                </Paragraph>
                <div>
                  <span className="text-sm text-gray-600">
                    {talent.yearsOfExperience} years experience |{" "}
                    {talent.companies.length} compan{talent.companies.length === 1 ? 'y' : 'ies'}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {talent.skills?.slice(0, 6).map((skill: string, index: number) => (
                    <Tag color="blue" key={index}>{skill}</Tag>
                  ))}
                </div>
              </Space>
            </Card>
          </Col>

        ))}
      </Row>
    </motion.div>
  );
}
