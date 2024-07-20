import { Card } from "../components/Projects/Card";
import { TitleCard } from "../components/Projects/TitleCard";

export const GridCardProjects = () => {
  return (
    <section className="bg-zinc-800 p-4 text-zinc-50 md:p-12">
      <article className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-zinc-700 border border-zinc-700 md:grid-cols-3 md:divide-x md:divide-y-0">
        <TitleCard />
        <Card
          href="#"
          date="July 2024"
          title="Hireme"
          description="simplifies job search process."
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          href="#"
          date="June 2024"
          title="InStock"
          description="collaborative project management."
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </article>
      <article className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-zinc-700 border border-zinc-700 md:grid-cols-3 md:divide-x md:divide-y-0">
        <Card
          href="#"
          date="April 2024"
          title="Prism"
          description="real-time document management system powered by AI."
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          href="#"
          date="March 2024"
          title="Epigram"
          description="story telling platform for your pets."
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          href="#"
          date="Jan 2024"
          title="iNote"
          description="minimalist note-taking platform."
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </article>
    </section>
  );
};
