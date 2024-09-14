import { Container } from "@/components/Container";
import Header from "@/components/Header";
import { MainNav } from "@/components/main-nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

export default async function AboutPage() {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800">
        <Container>
          <MainNav />
          <Header>
            <h1 className="title font-semibold text-2xl tracking-tighter mt-4 capitalize">
              About Me
            </h1>
          </Header>
        </Container>
      </div>
      <div className="container max-w-6xl py-6 lg:py-10">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="min-w-48 max-w-48 flex flex-col gap-2">
            <p className="text-muted-foreground text-center break-words">
              Software Developer
            </p>
          </div>
          <p className="text-muted-foreground text-lg py-4">
            Hi 👋 I am Siddharth Mohanty A passionate Full Stack developer from
            India 🔭 I am currently working on MERN Chatgpt project 🌱 I am
            currently learning DevOps 👯 I am looking to collaborate on Full
            Stack projects 🤝 I am looking for help with with MERN 💬 Ask me
            about MERN Stack 📫 How to reach me siddharthmohanty23@gmail.com ⚡
            Fun fact I am a gamer
          </p>
        </div>
      </div>
    </>
  );
}
