import { TechBadge } from "./TechBadge"

export const TechStacks = () => {
    return (
        <section className="relative">
            <article>
                <h4 className="font-bold mb-6">
                    Front-End Stacks
                </h4>
                <aside className="flex flex-wrap gap-2 mb-8">
                    <TechBadge>NextJS</TechBadge>
                    <TechBadge>CSS</TechBadge>
                    <TechBadge>SASS</TechBadge>
                    <TechBadge>Typescript</TechBadge>
                    <TechBadge>Javascript</TechBadge>
                    <TechBadge>TailwindCSS</TechBadge>
                    <TechBadge>UI Libraries</TechBadge>
                    <TechBadge>Framer Motion</TechBadge>
                </aside>
            </article>
            <article>
                <h4 className="font-bold mb-6">
                    Back-End Stacks
                </h4>
                <aside className="flex flex-wrap gap-2 mb-8">
                    <TechBadge>NodeJS</TechBadge>
                    <TechBadge>Express</TechBadge>
                    <TechBadge>Postgres</TechBadge>
                    <TechBadge>MySQL</TechBadge>
                    <TechBadge>MongoDB</TechBadge>
                    <TechBadge>Supabase</TechBadge>
                    <TechBadge>Convex</TechBadge>
                    <TechBadge>OpenAI</TechBadge>
                    <TechBadge>Gemini</TechBadge>
                    <TechBadge>AWS</TechBadge>
                    <TechBadge>Hono</TechBadge>
                    <TechBadge>Zustand</TechBadge>
                    <TechBadge>REST API</TechBadge>
                    <TechBadge>Axios</TechBadge>
                </aside>
            </article>
            <article>
                <h4 className="font-bold mb-6">
                    Other Tools
                </h4>
                <aside className="flex flex-wrap gap-2 mb-8">
                    <TechBadge>Jira</TechBadge>
                    <TechBadge>Git</TechBadge>
                    <TechBadge>Github</TechBadge>
                    <TechBadge>Github Actions</TechBadge>
                    <TechBadge>Clerk</TechBadge>
                    <TechBadge>OAuth</TechBadge>
                    <TechBadge>JWT</TechBadge>
                    <TechBadge>Heroku</TechBadge>
                    <TechBadge>Netlify</TechBadge>
                    <TechBadge>Docker</TechBadge>
                </aside>
            </article>
        </section>
    )
}