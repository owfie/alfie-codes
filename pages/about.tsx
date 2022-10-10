import { NextPage } from "next/types"
import { Chip } from "src/Chip"
import { Spacer } from "src/Spacer";

const About: NextPage = () => {
  return (
    <div>
      <Chip>Weird Computer Person</Chip>
      <p>
        I’m a design enthusiast and frontend developer. I have a Bachelor of Computer Science from the University of Adelaide. I’m passionate
        about building things that look nice.
      </p>
      <Spacer />
      <Chip>Design Philosophy</Chip>
      <p>Nothing is ever truly finished.</p>
      <p>
        I believe that setting interesting constraints leads to the most
        creative solutions.
      </p>
      <p>
        I believe that whether we recongise it or not, everything we produce is
        a derivative work. Great creators are just good at hiding their
        influences.
      </p>
      <p>
        I believe that the things you don’t design are more important than the
        things you do, and that effective product design should speak for
        itself. The world needs less bullshit and more things that just
        work(TM).
      </p>
      <p>
        I believe that design that is accessible and inclusive is better for
        everyone. Good digital products are those which are made with
        accessibility in mind from the start.
      </p>
      <Spacer />
      <Chip>Human being</Chip>
      <p>
        I like films that have chapters and albums that should be listened from
        front to back. I like consuming media and products which take care in
        their visual design. I learned how to make espresso at my first
        internship and picked up a coffee interest to teach myself latte art.
      </p>
      <p>
        I’m a competitive person and enjoy taking games too seriously. I’ve
        played Ultimate for over 5 years.
      </p>
    </div>
  );
}

export default About