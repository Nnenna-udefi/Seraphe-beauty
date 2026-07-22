"use client";

import Image from "next/image";
// import { useSite } from "./helper/siteContext";
import { H1, H3 } from "./ui/heading";
// import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { Team } from "./types/api";
// import { Mail } from "lucide-react";
// import Link from "next/link";

export default function TeamSection({ teams }: { teams: Team[] }) {
  // const { teamGrouped } = useSite();
  const groupedTeams = teams.reduce(
    (acc, member) => {
      const section = member.section;

      if (!acc[section]) {
        acc[section] = [];
      }

      acc[section].push(member);

      return acc;
    },
    {} as Record<string, Team[]>,
  );

  return (
    <section className="py-10 md:px-12 md:py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <H1 className="py-6">Meet the Seraphé Team</H1>

        <div>
          {Object.entries(groupedTeams).map(([section, members], index) => (
            <div
              key={section}
              className={`py-10 ${
                index === 0
                  ? "border-y border-[#c6c6c6]"
                  : "border-b border-[#c6c6c6]"
              }`}
            >
              <H3 className="text-primaryBg py-6">{section}</H3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {members.map((member) => (
                  <div key={member._id}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full rounded-full aspect-square object-cover"
                    />

                    <div className="pt-3">
                      <h3 className="md:text-xl text-base font-medium">
                        {member.name}
                      </h3>

                      <p className="uppercase text-darkText text-sm mt-1">
                        {member.role}
                      </p>
                      {/* 
                      {member?.bio && (
                        <p className="text-sm text-darkText mt-3 line-clamp-3">
                          {member.bio}
                        </p>
                      )} */}

                      {/* <div className="flex gap-3 mt-4">
                        {member?.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaLinkedin
                              size={18}
                              className="hover:text-primaryBg transition"
                            />
                          </a>
                        )}

                        {member?.instagram && (
                          <Link
                            href={member.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaInstagram
                              size={18}
                              className="hover:text-primaryBg transition"
                            />
                          </Link>
                        )}

                        {member?.email && (
                          <Link href={`mailto:${member.email}`}>
                            <Mail
                              size={18}
                              className="hover:text-primaryBg transition"
                            />
                          </Link>
                        )}
                      </div> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
