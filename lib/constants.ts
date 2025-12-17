export type EventType = {
    image: string;
    title: string;
    slug: string;
    location: string;
    date: string;
    time: string;
};



export const events: EventType[] = [
    {
        image: "/images/event1.png",
        title: "React Summit 2025",
        slug: "react-summit-2025",
        location: "Karachi, Pakistan",
        date: "March 15, 2025",
        time: "10:00 AM – 5:00 PM",
    },
    {
        image: "/images/event2.png",
        title: "Next.js Global Conference",
        slug: "nextjs-global-conference",
        location: "Online (Virtual Event)",
        date: "April 2, 2025",
        time: "6:00 PM – 9:00 PM PST",
    },
    {
        image: "/images/event3.png",
        title: "Frontend Developers Meetup",
        slug: "frontend-developers-meetup-lahore",
        location: "Lahore, Pakistan",
        date: "April 20, 2025",
        time: "3:00 PM – 7:00 PM",
    },
    {
        image: "/images/event4.png",
        title: "AI & Web Hackathon",
        slug: "ai-web-hackathon-islamabad",
        location: "Islamabad, Pakistan",
        date: "May 10–11, 2025",
        time: "9:00 AM – 6:00 PM",
    },
    {
        image: "/images/event5.png",
        title: "Startup Tech Talk: Scaling Web Apps",
        slug: "startup-tech-talk-scaling-web-apps",
        location: "Online (Live Webinar)",
        date: "May 25, 2025",
        time: "8:00 PM – 9:30 PM PKT",
    },
    {
        image: "/images/event6.png",
        title: "Cloud & DevOps Workshop",
        slug: "cloud-devops-workshop",
        location: "Multan, Pakistan",
        date: "June 8, 2025",
        time: "11:00 AM – 4:00 PM",
    }
];
