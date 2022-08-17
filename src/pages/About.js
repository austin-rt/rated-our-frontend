const About = () => {
  return (
    <div class="about-section">
      <h1> About Rated Our&reg; </h1>

      <div class="project details">
        <p>
          {' '}
          Rated Our is the newest and hottest resource for trusted
          recommendations for top-tier entertainment. Fans and crtics are able
          to voice their opinions, reactions, and takeaways from films available
          on our ever-growing catalogue. If you’re an entertainment fan looking
          for a recommendation, or to share an opinion, you’ve come to the right
          place.
        </p>

        <h2>How does Rated Our work?</h2>
        <p>
          Rated Our is a full-stack web application built on the PERN Stack.
          PostgreSQL manages our database which stores all information about
          users, movies, as well as the user's reviews for movies. Express is
          the framework that will request CRUD operations using different routes
          to access information in our database. There are requests to create,
          update, delete users, access all movies and their details, and even
          access and alter reviews that the user posts. React is the library
          that grants users the ability to interact with the application.
          selecting components to navigate and explore all features of the
          application. Node.js is the engine that runs it all. With a server
          environment, Node.js runs the application making everything come
          together.
        </p>

        <h2>How to use Rated Our?</h2>
        <p>
          At the homepage, users will see all movies available throughout the
          database. Clicking on a movie will display details on the movies as
          well as reviews from other users. Here at Rated Our, we recommend all
          users to sign up to fully utilize the full capabitilies of
          this application. With a personal account, the user can leave a rating and explain 
          their reasoning, sharing their viewpoints and perspective. If the user changes their mind, that is okay. 
          The user can update or delete their review. We’re all about debate and discussion at Rated Our, and want to know what our fans think. 
          We trust that you will be able to enjoy what we have to offer and you have a place in this community to share your thoughts
        </p>
      </div>

      <div class="team">
        <h2>Meet the Team</h2>
        <p>Rated Our could not exist without the members of our team. 
          This full-stack project has been developed by this talented team of developers. 
          Clicking the link will redirect you to their own personal LinkedIn profiles. 
          Do not be shy and give them a follow. </p>
        <h4>Alexander Ab</h4>
        <a href="https://www.linkedin.com/in/alexander-ab-831b01182/">
          LinkedIn
        </a>
        <h4>Austin Taylor</h4>
        <a href="https://www.linkedin.com/in/austinrt/">LinkedIn</a>
        <h4>Deonte LaBorde</h4>
        <a href="https://www.linkedin.com/in/deonte-laborde/">LinkedIn</a>
        <h4>Russell Ochoa</h4>
        <a href="https://www.linkedin.com/in/russell-ochoa-7a2a9516/">
          LinkedIn
        </a>
      </div>
    </div>
  )
}
export default About
