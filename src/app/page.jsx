// import { TopNavigation } from "@/components/TopNavigation";
import CourseCard from "@/components/CourseCard";
// import { Footer } from "@/components/Footer";
import IntroSection from "@/components/IntroSection";

export default function Home() {
  return (
    <div>
      {/* <TopNavigation /> */}
      <IntroSection />
      
      <h1 id="courses" className="text-4xl font-semibold mt-10 mb-8 text-center md:text-left md:ml-8 lg:ml-32">
  Courses
</h1>

<div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3 lg:px-32 mb-8">
  <CourseCard
    className="my-card"
    title="Data Structures"
    content="Unlock the power of data structures such as arrays, linked lists, stacks, queues, trees, and graphs. Learn how to organize and store data efficiently, enabling you to tackle complex coding problems with optimized solutions. This course will provide you with a solid foundation for advanced algorithm design and software development."
  />
  <CourseCard
    className="my-card"
    title="Algorithms"
    content="Delve into the world of algorithms, from sorting and searching to more advanced topics like dynamic programming, greedy algorithms, and graph theory. Develop a deep understanding of algorithmic thinking to solve problems systematically and improve your code's efficiency. Perfect for those looking to excel in competitive programming and technical interviews."
  />
  <CourseCard
    className="my-card"
    title="Web Development"
    content="Embark on a journey through modern web development. This course covers everything from the basics of HTML, CSS, and JavaScript to advanced frameworks like React. Learn to build responsive, interactive websites and web applications, and understand how to work with REST APIs, databases, and user authentication for full-stack development."
  />
  <CourseCard
    className="my-card"
    title="Java"
    content="Explore the world of Java, a versatile and powerful programming language. Start with the basics and gradually move to advanced concepts like object-oriented programming, exception handling, multithreading, and JavaFX for GUI applications. This course is designed to equip you with the skills to develop robust, scalable applications for desktop, web, and mobile platforms."
  />
  <CourseCard
    className="my-card"
    title="Database Systems"
    content="Gain a comprehensive understanding of database concepts, including database design, normalization, SQL queries, and data integrity. Learn how to design efficient databases, perform complex queries, and manage data effectively. This course also covers NoSQL databases, enabling you to choose the right data storage solution for various applications."
  />
  <CourseCard
    className="my-card"
    title="Operating Systems"
    content="Explore the inner workings of operating systems, including process management, memory management, file systems, and security. Learn how operating systems allocate resources, handle concurrency, and provide a stable environment for application execution. This course gives you the knowledge to understand and interact with system-level programming, enhancing your software development skills."
  />
</div>


    </div>
  );
}
