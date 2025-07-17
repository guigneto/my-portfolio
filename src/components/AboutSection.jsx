"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Habilidades",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>Node.js</li>
        <li>TypeScript</li>
        <li>Java</li>
        <li>PostgreSQL</li>
      </ul>
    ),
  },
  {
    title: "Formação",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Bacharelado em Sistemas de Informação - IFES
          <br />
          <span className="text-gray-400 text-sm italic">
            (2022 - 2026)
          </span>
        </li>
      </ul>
    ),
  },
  {
    title: "Experiência",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Estagiário de TI na Innova Soluções
          <br />
          <span className="text-gray-400 text-sm italic">
            (set 2024 - o momento)
          </span>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
        <Image src="/images/about_image.png" 
        className="rounded-lg"
        alt="About Image"
        width={500} 
        height={500}/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mim</h2>
          <p className="text-white text-base md:text-lg">
            Sou um desenvolvedor web apaixonado por tecnologia e movido por desafios. Acredito que a melhor forma de evoluir é colocar a mão na massa, e é assim que venho construindo minha jornada no desenvolvimento. Gosto de transformar problemas em soluções funcionais e intuitivas, sempre com foco na experiência do usuário.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Habilidades
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Formação
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experiência
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;