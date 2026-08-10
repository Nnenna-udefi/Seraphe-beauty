"use client";

import Image from "next/image";
import Link from "next/link";
import { H1, H3 } from "./ui/heading";
import { Team } from "./types/api";
// import { Mail } from "lucide-react";

export default function TeamSection({ teams = [] }: { teams?: Team[] }) {
  // Group members dynamically by section
  const groupedTeams = (teams || []).reduce(
    (acc, member) => {
      const section = member.section || "Core Team";

      if (!acc[section]) {
        acc[section] = [];
      }

      acc[section].push(member);

      return acc;
    },
    {} as Record<string, Team[]>,
  );

  const sections = Object.entries(groupedTeams);

  if (sections.length === 0) {
    return null;
  }

  return (
    <section className="py-12 md:py-20 px-6 md:px-12 bg-stone-50/50">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          {/* <span className="uppercase text-amber-700 text-xs font-bold tracking-widest">
            The Minds Behind Seraphé
          </span> */}
          <H1 className="text-3xl md:text-4xl font-bold text-stone-900">
            Meet Our Leadership & Experts
          </H1>
          <p className="text-stone-500 text-sm md:text-base font-light">
            Passionate individuals shaping the future of African beauty science,
            skincare innovation, and digital education.
          </p>
        </div>

        {/* Grouped Team Sections */}
        <div className="space-y-16">
          {sections.map(([section, members]) => (
            <div key={section} className="space-y-8">
              {/* Section Divider & Heading */}
              <div className="flex items-center gap-4 border-b border-stone-200 pb-4">
                <H3 className="text-xl md:text-2xl font-bold text-stone-800 capitalize">
                  {section}
                </H3>
                <div className="h-0.5 flex-1 bg-linear-to-r from-stone-200 to-transparent" />
              </div>

              {/* Grid Layout */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
                {members.map((member) => (
                  <div
                    key={member._id}
                    className="group flex flex-col items-center text-center space-y-3 p-2 rounded-2xl bg-white border border-stone-200/60 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Member Image Frame */}
                    <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-amber-600/20 group-hover:border-amber-600/60 transition-colors bg-stone-100 shrink-0">
                      <Image
                        src={member.image || "/images/placeholder-avatar.jpeg"}
                        alt={member.name}
                        fill
                        sizes="(max-width: 640px) 112px, 144px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content Details */}
                    <div className="space-y-1 w-full">
                      <h4 className="text-base  font-semibold text-stone-900 group-hover:text-primaryText transition-colors ">
                        {member.name}
                      </h4>

                      <p className="text-xs uppercase font-medium tracking-wider text-primaryText ">
                        {member.role}
                      </p>

                      {/* {member.bio && (
                        <p className="text-xs text-stone-500 pt-2 line-clamp-2 font-light leading-relaxed">
                          {member.bio}
                        </p>
                      )} */}
                    </div>

                    {/* Social Media Links */}
                    {/* {(member.linkedin || member.instagram || member.email) && (
                      <div className="flex items-center justify-center gap-3 pt-2 border-t border-stone-100 w-full text-stone-400">
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name}'s LinkedIn`}
                            className="hover:text-amber-700 transition-colors p-1"
                          >
                            <Linkedin size={16} />
                          </a>
                        )}

                        {member.instagram && (
                          <a
                            href={member.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name}'s Instagram`}
                            className="hover:text-amber-700 transition-colors p-1"
                          >
                            <Instagram size={16} />
                          </a>
                        )}

                        {member.email && (
                          <Link
                            href={`mailto:${member.email}`}
                            aria-label={`Email ${member.name}`}
                            className="hover:text-amber-700 transition-colors p-1"
                          >
                            <Mail size={16} />
                          </Link>
                        )}
                      </div>
                    )} */}
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
