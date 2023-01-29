import React, { ReactNode } from "react"
import { Margin } from "../components/Margin"
import { colors } from "../constraint"
import { imgUtils } from "../images/img_container"
import { Container } from "./about"
import ScrollContainer from "react-indiana-drag-scroll"

export default () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-w-l text-b-d font-score">
      <Container>
        {/* Header */}
        <div className="flex flex-col items-end">
          <p className="text-base md:text-lg ">
          </p>
          <p className="text-base md:text-lg "></p>
        </div>
        <Margin margin={24} />
        <p className="text-2xl font-bold md:text-4xl "># 손민, 포트폴리오</p>
      </Container>
      <div className="flex w-screen h-4 bg-w-back"></div>
      <Container>
        <ProjectCard
          title="인적성 공간지각 문제풀이 앱, 점선면"
          periodText={"2021.02 - 2021.12"}
          description={
            "GSAT, HMAT 등 대기업 인적성 중 공간지각 유형 문제풀이 앱입니다.\n크로스 플랫폼인 플러터를 통하여 개발하였습니다.\n자체 개발한 문제 생성 알고리즘을 통해 문제와 3D 객체 등을 생성합니다.\n생성된 문제는 풀이, 레벨 테스트, 통계 등에서 활용하도록 구현하였습니다."
          }
          whatIdos={[
              "문제 데이터를 이용하여 2D png 이미지 생성",
              "문제 데이터를 이용하여 3D obj 객체 생성",
          ]}
          techStacks={["Flutter", "Adobe XD"]}
          contributionPercent={40}
          badgeColor={colors.manta}
          badgeText={"개인 프로젝트"}
          imgComponent={
            <ScrollContainer
              horizontal
              hideScrollbars
              className="flex w-full gap-4"
            >
              {imgUtils.plp_imgs.map(image => {
                return (
                  <img src={image} className="border border-black-m w-[25%]" />
                )
              })}
            </ScrollContainer>
          }
          links={[
            {
              title: "깃허브 레포지토리",
              url: "https://github.com/StationSoen/Capstone",
            },
            {
              title: "앱스토어 링크",
              url: "https://apps.apple.com/kr/app/id1585635701",
            },
            {
              title: "플레이스토어 링크",
              url: "https://play.google.com/store/apps/details?id=com.soen.pointlineplane",
            },
          ]}
        />
      </Container>

        <div className="flex w-screen h-4 bg-w-back"></div>
        <Container>
            <ProjectCard
                title="툰드라"
                periodText={"2022.01 - 2022.02"}
                description={
                    "외국인을 위한 웹툰 번역 서비스입니다.\n퀴즈 및 단어장 기능을 가진 학습 도우미 기능도 있습니다.\n커뮤니티를 통해 오역을 고칠 수 있습니다.\n"
                }
                whatIdos={[
                    "Google OCR 및 translator API 연동",
                    "플라스크를 사용해 API 설계 및 구현" ,
                    "커뮤니티를 위한 DB 설계 및 구현",
                ]}
                techStacks={["Flask", "MySql"]}
                contributionPercent={35}
                badgeColor={colors.manta}
                badgeText={"사내 프로젝트"}
                imgComponent={

                        <ScrollContainer
                            horizontal
                            hideScrollbars
                            className="flex w-full gap-4"
                        >
                            {imgUtils.toondra_imgs.map(image => {
                                return (
                                    <img
                                        src={image}
                                        className="border border-black-m w-[25%]"
                                    />
                                )
                            })}
                        </ScrollContainer>
                }
                links={[
                    {
                        title: "Chrome 웹 스토어 (서버 중지)",
                        url: "https://chrome.google.com/webstore/detail/toondra/ffckdacnecmhemmfecbnbfllbhgcffni?hl=ko",
                    },
                ]}
            />
        </Container>
    </div>
  )
}

export interface Link {
  title: string
  url: string
}

interface ProjectCardProps {
  title: string
  periodText: string
  description: string
  whatIdos: string[]
  imgComponent: ReactNode
  techStacks: string[]
  links: Link[]
  contributionPercent: number
  badgeText?: string
  badgeColor?: string
}

const ProjectCard = ({
  title,
  periodText,
  description,
  imgComponent,
  whatIdos,
  techStacks,
  contributionPercent,
  badgeText,
  badgeColor,
  links,
}: ProjectCardProps) => {
  return (
    <div className="relative flex flex-col ">
      <div className="flex flex-row items-center">
        <div className="relative flex w-fit h-fit">
          <div className="absolute bottom-0 flex w-full h-3/6 bg-key-manta/25"></div>
          <p className="z-10 text-xl font-bold md:text-3xl ">{title}</p>
        </div>
        {badgeText && badgeColor && (
          <p
            className="md:ml-4 px-2 py-[2px] md:text-xs text-[0.5rem] border rounded-full hidden md:flex  "
            style={{
              borderColor: badgeColor,
              color: badgeColor,
            }}
          >
            {badgeText}
          </p>
        )}
      </div>
      <Margin margin={4} />
      <p className="ml-4 text-xs md:text-sm ">{periodText}</p>
      <Margin margin={24} />

      <p className="text-base font-bold md:text-lg ">개요</p>
      <Margin margin={8} />
      <p className="ml-4 text-sm whitespace-pre-wrap md:text-base ">
        {description}
      </p>
      <Margin margin={24} />

      {/* What I do */}
      <p className="text-base font-bold md:text-lg ">{'역할'}</p>
      <Margin margin={8} />
      <div className="flex flex-col gap-1">
        {whatIdos.map(e => (
          <p className="ml-4 text-sm md:text-base">{e}</p>
        ))}
      </div>
      <Margin margin={24} />
      {/* What I do */}
      <p className="text-base font-bold md:text-lg ">기술 스택</p>
      <Margin margin={8} />
      <div className="flex flex-row gap-1">
        {techStacks.map(e => (
          <p className="ml-4 text-sm md:text-base">{e}</p>
        ))}
      </div>
      <Margin margin={24} />
      {/* What I do */}
      <p className="text-base font-bold md:text-lg ">개발 내용 (이미지)</p>
      <Margin margin={8} />
      {imgComponent}
      {/* </div> */}
      <Margin margin={24} />
      <p className="text-base font-bold md:text-lg ">링크</p>
      <Margin margin={8} />
      <div className="flex flex-col gap-2 md:gap-1 md:flex-row">
        {links.map(e => (
          <a href={e.url} className="ml-4 text-sm md:text-base ">
            {e.title}
          </a>
        ))}
      </div>
      <Margin margin={40} />
    </div>
  )
}
