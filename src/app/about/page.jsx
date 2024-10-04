
const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="bg-[#f7f7f7] p-6 rounded shadow-md w-full max-w-2xl">
        <h1 className="text-3xl text-center font-bold mb-4">About Us</h1>
        
        {/* About Us Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
          <p className="mb-4">
            We are a team of passionate educators and developers dedicated to providing students with easy access to quality education. 
            Our platform is designed to help students explore and enroll in various computer science courses, tailored to their interests and skill levels.
          </p>
        </section>

        {/* Our Mission Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="mb-4">
            Our mission is to make education accessible and convenient for everyone. 
            We believe in empowering students by offering them the resources they need to succeed in their educational journey. 
            Through our platform, we aim to simplify the enrollment process and provide a seamless learning experience.
          </p>
        </section>

        {/* Our Vision Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p className="mb-4">
            Our vision is to create a world where quality education is within reach for every student. 
            We strive to build a platform that not only simplifies course enrollment but also inspires students to pursue their academic and professional goals.
          </p>
        </section>

      </div>
    </div>
  );
};

export default About;
