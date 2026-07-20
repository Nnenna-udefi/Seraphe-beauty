"use client";

import Image from "next/image";
import { useSite } from "./helper/siteContext";
import { H1, H3 } from "./ui/heading";
import { FaLinkedin, FaMailBulk, FaInstagram } from "react-icons/fa";

export default function TeamSection() {
  const { teamGrouped } = useSite();

  return (
    <section className="py-10 md:px-12 md:py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <H1 className="py-6">Meet the Seraphé Team</H1>

        <div>
          {teamGrouped.map((section, index) => (
            <div
              key={section.slug}
              className={`py-10 ${
                index === 0
                  ? "border-y border-[#c6c6c6]"
                  : "border-b border-[#c6c6c6]"
              }`}
            >
              <H3 className="text-primaryBg py-6">{section.name}</H3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {section.members.map((member) => (
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

                      {member?.bio && (
                        <p className="text-sm text-darkText mt-3 line-clamp-3">
                          {member.bio}
                        </p>
                      )}

                      <div className="flex gap-3 mt-4">
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
                          <a
                            href={member.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaInstagram
                              size={18}
                              className="hover:text-primaryBg transition"
                            />
                          </a>
                        )}

                        {member?.email && (
                          <a href={`mailto:${member.email}`}>
                            <FaMailBulk
                              size={18}
                              className="hover:text-primaryBg transition"
                            />
                          </a>
                        )}
                      </div>
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
