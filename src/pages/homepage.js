import { Github, Instagram } from "lucide-react";
import React from "react";
import { ReactComponent as Discord } from "../components/svg/discord.svg";
import { ReactComponent as Telegram } from "../components/svg/telegram.svg";
import { ReactComponent as RightArrow } from "../components/svg/right-arrow.svg";
import Title from "../components/Title";
import SkillsGrid from "../components/Skills/SkillsGrid";
import SkillCard from "../components/Skills/SkillCard";
import WebLink from "../components/HomepageComponents/WebLink";
import EducationTable from "../components/HomepageComponents/EducationTable";
import Article from "../components/HomepageComponents/Article";

export default function Homepage() {
  return (
    <article>
      <div className="px-4 pt-20">
        {/* title of the page */}
        <div className="dark:bg-[#323232] bg-[#f6f0e8] rounded-md p-2 mb-7 text-center">
          Hello i'm React developer based in Ukraine
        </div>
        {/* about author */}
        <div className="flex">
          <div className="flex flex-col justify-center">
            <div className="text-3xl font-bold">Vitaliy Posvistak</div>
            <p>Developer (JavaScript / React / Node.js)</p>
          </div>
          <div className="ml-auto">
            <img
              src="/myPhoto.png"
              alt="myPhoto"
              className="w-24 h-fit rounded-full border-2 border-l-yellow-100"
            ></img>
          </div>
        </div>

        {/* Work */}
        <Article heading="Work">
          Vitalii is a full-stack developer living in Bila Tserkva, currently
          studying at Kharkiv Aviation Institute (KhAI). He loves to learn new
          interesting features and use them in his work. He is always ready to
          do his job quickly and efficiently. When he is not online, he likes to
          relax with his friends playing various games. He is currently looking
          for a job <span>&lt;3</span>.
        </Article>

        <article>
          <Title>Skills</Title>
          <SkillsGrid>
            <SkillCard iconpath="html.png" skillName="HTML" />
            <SkillCard iconpath="css.png" skillName="CSS" />
            <SkillCard iconpath="js.png" skillName="JavaScript" />
            <SkillCard iconpath="typescript.png" skillName="TypeScript" />
            <SkillCard iconpath="atom.png" skillName="React" />
            <SkillCard iconpath="nextjs.png" skillName="Next.js" />
            <SkillCard iconpath="nodejs.png" skillName="Node.js" />
            <SkillCard iconpath="tailwindcss.jpg" skillName="TailwindCSS" />
          </SkillsGrid>
        </article>

        {/* Education */}
        <Article heading="Education">
          <EducationTable title="2019">
            Graduated from Kakhovka secondary school of I-III levels No. 5 of
            Kakhovka City Council of Kherson region.
          </EducationTable>
          <EducationTable title="2021">
            Received a certificate of complete secondary education at the
            Novokakhovka Instrument-Making Vocational College
          </EducationTable>
          <EducationTable title="2023">
            Received a junior specialist diploma in software engineering at the
            Novokakhovka Instrument-Making Vocational College
          </EducationTable>
          <EducationTable title="2023">
            Entered the National Aerospace University named after M.E. Zhukovsky
            “Kharkiv Aviation Institute”
          </EducationTable>
          <EducationTable title="2024">
            participated in GlobalGameJam for the "Clownery" team
          </EducationTable>
          <div className="flex justify-center items-center my-4">
            <a
              href="https://globalgamejam.org/games/2024/clownery-adventure-extreme-bbq-4"
              target="_blank"
              rel="noreferrer"
            >
              <button className="flex justify-center items-center bg-teal-300 text-black text-lg p-1 px-4 rounded hover:bg-teal-500">
                Jam web-site <RightArrow className="h-3 w-3 ml-2" />
              </button>
            </a>
          </div>
        </Article>

        <Article heading="I ♥">
          <p className="">
            Art, Music, Drawing, Playing games, Coding, Moding for minecraft,
            Make games
          </p>
        </Article>

        <Article heading="On the web">
          <ul>
            <WebLink to={"https://www.instagram.com/_vitalio.p_/"}>
              <Instagram className="h-5 w-5 mr-2" />
              @_vitalio.p_
            </WebLink>
            <WebLink to={"https://github.com/vitaliy65"}>
              <Github className="h-5 w-5 mr-2" />
              @vitaliy65
            </WebLink>
            <WebLink to={"https://t.me/Vitalas_P"}>
              <Telegram className="h-5 w-5 mr-2" />
              @Vitalas_P
            </WebLink>
            <WebLink to={"https://Discordapp.com/users/vurbin66"}>
              <Discord className="h-5 w-5 mr-2" />
              @Vurbin66
            </WebLink>
          </ul>
        </Article>
      </div>
    </article>
  );
}
