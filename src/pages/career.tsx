import React, { ReactNode } from "react"
import { Margin } from "../components/Margin"
import { colors } from "../constraint"
import { Link } from "./portfolio"
import ScrollContainer from "react-indiana-drag-scroll";
import {imgUtils} from "../images/img_container";

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
                <p className="text-2xl font-bold md:text-4xl ">
                    # 반갑습니다, 손민입니다.
                </p>
            </Container>
            <div className="flex w-screen h-4 bg-w-back" />
            <Container>
                <p className="text-3xl font-bold md:text-4xl text-key-lidi"># Info</p>
                <Margin margin={40} />
                <div className="flex flex-col justify-between md:flex-row gap-y-4 md:gap-y-0">
                    <div className="flex flex-row ">
                        <div className="flex flex-col mr-2 w-fit gap-y-4 md:gap-y-4">
                            <p className="text-sm font-semibold md:text-base ">국문 이름</p>
                            <p className="text-sm font-semibold md:text-base ">영문 이름</p>
                        </div>
                        <div className="flex flex-col w-fit gap-y-4 md:gap-y-4 ">
                            <p className="text-sm md:text-base ">손민</p>
                            <p className="text-sm md:text-base ">Min Sohn</p>
                        </div>
                    </div>
                    <div className="flex flex-row ">
                        <div className="flex flex-col mr-2 w-fit gap-y-4 md:gap-y-4">
                            <p className="text-sm font-semibold md:text-base ">병역 사항</p>
                            <p className="text-sm font-semibold md:text-base ">학력 사항</p>
                        </div>
                        <div className="flex flex-col w-fit gap-y-4 md:gap-y-4">
                            <p className="text-sm md:text-base ">군필</p>
                            <p className="text-sm md:text-base ">
                                중앙대학교 컴퓨터공학과 졸업
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row ">
                        <div className="flex flex-col mr-2 w-fit gap-y-4 md:gap-y-4">
                            <p className="text-sm font-semibold md:text-base ">휴대전화</p>
                            <p className="text-sm font-semibold md:text-base ">이메일</p>
                        </div>
                        <div className="flex flex-col w-fit gap-y-4 md:gap-y-4">
                            <p className="text-sm md:text-base ">010-5555-7994</p>
                            <p className="text-sm md:text-base ">miney0727@naver.com</p>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="flex w-screen h-4 bg-w-back" />
            <Container>
                <p className="text-3xl font-bold md:text-4xl text-key-lidi"># Skills</p>
                <Margin margin={40} />

                <SkillCard
                    title="프레임워크 및 환경"
                    description={''}
                    badgeColor={colors.lidi}
                    badgeText={["Flutter","MySQL","Flask","Docker","Spring Boot"]}
                />
                <SkillCard
                    title="프로그래밍 언어"
                    description={``}
                    badgeColor={colors.manta}
                    badgeText={["Python3","Dart","C++","Java"]}
                />
            </Container>
            <div className="flex w-screen h-4 bg-w-back" />
            <Container>
                <p className="text-3xl font-bold md:text-4xl text-key-lidi"># 세부경험</p>
                <Margin margin={40} />
                <Company
                    title="Seculayer"
                    position="Meta-Feature / 인턴"
                    periodText="2020.07 - 2020.08"
                >
                    <>
                        <ProjectCard
                            title="캐글 대회 참여 & Meta feature 조사·분석·정리"
                            periodText={""}
                            description={
                                "캐글 데이터 분석 대회 7개 참여\n상위 40% 이내 3개 달성\n"
                            }
                            whatIdos={["데이터 전처리 및 XGB classifier 를 통한 자연어 처리",
                                "딥러닝을 이용한 음성 및 이미지 처리",
                                "Meta-Feature 관련 논문 조사·분석·정리",
                            ]}
                            techStacks={[]}
                            imgComponent={[]}
                            contributionPercent={50}
                            badgeColor={colors.manta}
                            badgeText={""}
                            links={[
                                {
                                    title: "깃허브 레포지토리",
                                    url: "https://github.com/seculayer/AutoAPE-challenge1/tree/master/SohnMin",
                                },
                            ]}
                        />

                    </>
                </Company>
                <Company
                    title="카카오브레인"
                    position="Pathfinder / 인턴"
                    periodText="2022.01 - 2022.02"
                >
                    <>
                        <ProjectCard
                            title="툰드라"
                            periodText={""}
                            description={
                                "외국인을 위한 웹툰 번역 서비스입니다.\n퀴즈 및 단어장 기능을 가진 학습 도우미 기능도 있습니다.\n커뮤니티를 통해 오역을 고칠 수 있습니다.\n"
                            }
                            whatIdos={[
                                "Google OCR 및 translator API 연동",
                                "플라스크를 사용해 API 설계 및 구현" ,
                                "커뮤니티를 위한 DB 설계 및 구현",
                            ]}
                            techStacks={["Flask", "MySql"]}
                            imgComponent={[]}
                            contributionPercent={50}
                            badgeColor={colors.manta}
                            badgeText={""}
                            links={[
                                {
                                    title: "Chrome 웹 스토어 (서버 중지)",
                                    url: "https://chrome.google.com/webstore/detail/toondra/ffckdacnecmhemmfecbnbfllbhgcffni?hl=ko",
                                },
                            ]}
                        />
                    </>
                </Company>


            </Container>
            <div className="flex w-screen h-4 bg-w-back" />

            <Container>
                <p className="text-3xl font-bold md:text-4xl text-key-lidi">
                    # Activities
                </p>
                <Margin margin={40} />
                <Company title="교육">
                    <SimpleProjectCard
                        periodText="2016.03 - 2022.02"
                        title="중앙대학교 컴퓨터공학과"
                        description={"중앙대학교 컴퓨터공학과 학사 졸업.\nGPA: 3.4/4.5"}
                    />
                </Company>
                <Company
                    title="쿠버네티스 전문가 과정"
                    position=""
                    periodText="2022.04 - 2022.08"
                >
                    <>
                        <ProjectCard
                            title="쿠버네티스 전문가 양성 과정 4기"
                            periodText={""}
                            description={
                                "도커, 쿠버네티스, 젠킨스 등 CI/CD에 대해서 공부했습니다.\n유투브 클론 코딩을 진행하면서 AWS에 올렸습니다.\n"
                            }
                            whatIdos={[
                            ]}

                            techStacks={["Docker", "Kubernetes","Jenkins","Spring Boot"]}
                            imgComponent={[]}
                            contributionPercent={50}
                            badgeColor={colors.manta}
                            badgeText={""}
                            links={[
                            ]}
                        />
                    </>
                </Company>
                <Margin margin={40} />
                <Company title="자격">
                    <SimpleProjectCard
                        periodText="2021.08"
                        title="정보처리기사 취득"
                        description={"정보처리기사를 취득했습니다."}
                    />
                </Company>
                <Margin margin={40} />
                <Company title="수상">
                    <SimpleProjectCard
                        title="CAU 공학학술제 소프트웨어대학장상"
                        periodText="2021.12"
                        description={
                            '"인적성 공간지각 유형 문제풀이 앱, 점선면" 프로젝트로\n소프트웨어대학장상을 수상하였습니다.'
                        }
                    />
                    <SimpleProjectCard
                        periodText="2021.11"
                        title="다빈치 SW/AI TECH FAIR 우수상"
                        description={
                            '"인적성 공간지각 유형 문제풀이 앱, 점선면" 프로젝트로\n우수상을 수상하였습니다.'
                        }
                    />
                    <SimpleProjectCard
                        periodText="2022.07"
                        title="22년 현대모비스 알고리즘 경진대회 우수상"
                        description={
                            '22년 현대모비스 알고리즘 경진대회에서\n우수상을 수상하였습니다.'
                        }
                    />
                </Company>
            </Container>
            <div className="flex w-screen h-4 bg-w-back" />
            <Container>
                <p className="text-3xl font-bold md:text-4xl text-key-lidi"># Links</p>
                <Margin margin={12} />
                <a
                    className="text-sm md:text-base w-fit "
                    href="https://github.com/miney727"
                >
                    깃허브 링크
                </a>
            </Container>
            <div className="flex w-screen h-4 bg-w-back" />

        </div>
    )
}

export const Container = ({ children }: { children?: ReactNode }) => {
    return (
        <div className="flex flex-col w-full max-w-4xl px-6 py-10 md:px-10 column ">
            {children}
        </div>
    )
}

interface CompanyProps {
    title: string
    position?: string
    periodText?: string
    children: ReactNode
}

const Company = ({ title, position, periodText, children }: CompanyProps) => {
    return (
        <div className="flex flex-col flex-1 w-full md:flex-row ">
            {/* 회사명 */}
            <div className="flex flex-col w-full mb-4 md:mb-0 md:w-2/6 ">
                <div className="relative flex w-fit h-fit">
                    <div className="absolute bottom-0 flex w-full h-3/6 bg-key-lidi/25"></div>
                    <p className="z-10 text-2xl font-bold ">{title}</p>
                </div>
                {periodText && (
                    <>
                        <Margin margin={8} />
                        <p className="ml-2 text-sm ">{periodText}</p>
                    </>
                )}
                {position && (
                    <>
                        <Margin margin={4} />
                        <p className="ml-2 text-sm ">{position}</p>
                    </>
                )}
            </div>
            <div className="flex flex-col w-full md:w-4/6 ">{children}</div>
        </div>
    )
}

interface ProjectCardProps {
    title: string
    periodText: string
    description: string
    whatIdos: string[]
    imgComponent: ReactNode,
    techStacks: string[]
    contributionPercent: number
    badgeText?: string
    badgeColor?: string
    links: Link[]
}

const ProjectCard = ({
                         title,
                         periodText,
                         description,
                         whatIdos,
                         imgComponent,
                         techStacks,
                         contributionPercent,
                         badgeText,
                         badgeColor,
                         links,
                     }: ProjectCardProps) => {
    return (
        <div className="relative flex flex-col ">
            <div className="flex absolute h-[85%] w-1 bg-w-d/25 left-[-24px] md:visible invisible " />
            <div className="flex flex-row items-center">
                <div className="relative flex w-fit h-fit">
                    <div className="absolute bottom-0 flex w-full h-3/6 bg-key-manta/25"></div>
                    <p className="z-10 text-xl font-bold md:text-2xl ">{title}</p>
                </div>
                {badgeText && badgeColor && (
                    <p
                        className="ml-2 md:ml-4 px-1 md:px-2 text-[0.5rem] md:text-xs border rounded-full hidden md:flex "
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
            <Margin margin={16} />

            <p className="text-base font-bold md:text-lg ">개요</p>
            <Margin margin={8} />
            <p className="ml-4 text-sm whitespace-pre-wrap md:text-base ">
                {description}
            </p>
            <Margin margin={16} />

            {/* What I do */}
            {whatIdos.length > 0 && <>
                <p className="text-base font-bold md:text-lg ">{'역할'}</p>
                <Margin margin={8} />



                <div className="flex flex-col gap-1">
                    {whatIdos.map(e => (
                        <p className="ml-4 text-sm md:text-base ">{e}</p>
                    ))}
                </div>
            </>
            }
            {techStacks.length>0 && <>
                <Margin margin={16} /><p className="text-base font-bold md:text-lg ">기술 스택</p>
                <Margin margin={8} />
                <div className="flex flex-row gap-1">
                    {techStacks.map(e => (
                        <p className="ml-4 text-sm md:text-base ">{e}</p>
                    ))}
                </div>
                <Margin margin={16} /></>}
            {/* What I do */}
            {imgComponent.toString().length>0 && <> <p className="text-base font-bold md:text-lg ">개발 내용 (이미지)</p>
                <Margin margin={8} />
                {imgComponent}</>}
            <Margin margin={16} />
            {links.length>0 && <>
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
            </>}
        </div>


    )
}



interface SkillCardProps {
    title: string
    description: string
    badgeText: string[]
    badgeColor: string
}

const SkillCard = ({
                       title,
                       description,
                       badgeText,
                       badgeColor,
                   }: SkillCardProps) => {
    return (
        <div className="relative flex flex-col ">
            <div className="flex flex-row items-center gap-x-4">
                <div className="relative flex w-fit h-fit">
                    <div
                        className="absolute bottom-0 flex w-full h-3/6"
                        style={{
                            backgroundColor: badgeColor + "40",
                        }}
                    ></div>
                    <p className="z-10 text-xl font-bold md:text-2xl ">{title}</p>
                </div>

                {badgeText.map(e => (
                    <p
                        className="px-1 md:px-3 text-[0.5rem] md:text-xs border rounded-full hidden md:flex "
                        style={{
                            fontSize: "16px",
                            position: "relative",
                            top: "2px",
                            lineHeight: "20px",
                            borderColor: badgeColor,
                            color: badgeColor,
                        }}
                    >
                        {e}
                    </p>
                ))}
            </div>
            <Margin margin={16} />

            <p className="ml-4 text-sm whitespace-pre-wrap md:text-base ">
                {description}
            </p>
            <Margin margin={40} />
        </div>
    )
}

interface SimpleProjectCard {
    title: string
    descriptionTitle?: string
    description: string
    periodText
}

const SimpleProjectCard = ({
                               title,
                               descriptionTitle,
                               description,
                               periodText,
                           }: SimpleProjectCard) => {
    return (
        <div className="relative flex flex-col ">
            <div className="flex absolute h-[85%] w-1 bg-w-d/25 left-[-24px] md:visible invisible  " />
            <div className="relative flex w-fit h-fit">
                <div className="absolute bottom-0 flex w-full h-3/6 bg-key-manta/25"></div>
                <p className="z-10 text-xl font-bold md:text-2xl ">{title}</p>
            </div>
            <Margin margin={4} />
            <p className="ml-4 text-xs md:text-sm ">{periodText}</p>
            <Margin margin={8} />

            {descriptionTitle && (
                <>
                    <p className="text-base font-bold md:text-lg ">{descriptionTitle}</p>
                    <Margin margin={8} />
                </>
            )}
            <p className="ml-4 text-sm whitespace-pre-wrap md:text-base ">
                {description}
            </p>
            <div className="flex w-full h-3 md:h-10" />
        </div>
    )
}
