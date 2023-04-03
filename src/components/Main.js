import React, { Component } from "react";
import Forms from "./CV-Form/Forms";
import Display from "./CV-Display/Display";
import "../styles/Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.handlePhotoChange = this.handlePhotoChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleJobTitleChange = this.handleJobTitleChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handlePersonalDescriptionChange =
      this.handlePersonalDescriptionChange.bind(this);
    this.handleEducationInputsChange =
      this.handleEducationInputsChange.bind(this);
    this.handleSkillsInputsChange = this.handleSkillsInputsChange.bind(this);
    this.handleLanguageInputsChange =
      this.handleLanguageInputsChange.bind(this);
    this.handleExperienceInputsChange =
      this.handleExperienceInputsChange.bind(this);
    this.handleExample = this.handleExample.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      photo: "/images/placeholder_avatar.png",
      firstName: "",
      lastName: "",
      jobTitle: "",
      phoneNumber: "",
      email: "",
      address: "",
      personalDescription: "",
      education: [],
      skills: [],
      languages: [],
      experience: [],
      resetKey: 0,
    };
  }

  handlePhotoChange(photoUrl) {
    this.setState({ photo: photoUrl });
  }

  handleFirstNameChange(fName) {
    this.setState({ firstName: fName });
  }

  handleLastNameChange(lName) {
    this.setState({ lastName: lName });
  }

  handleJobTitleChange(job) {
    this.setState({ jobTitle: job });
  }

  handlePhoneNumberChange(number) {
    this.setState({ phoneNumber: number });
  }

  handleEmailChange(mail) {
    this.setState({ email: mail });
  }

  handleAddressChange(addr) {
    this.setState({ address: addr });
  }

  handlePersonalDescriptionChange(pDescr) {
    this.setState({ personalDescription: pDescr });
  }

  handleEducationInputsChange(educationInputs) {
    this.setState({ education: educationInputs });
  }

  handleSkillsInputsChange(skillsInputs) {
    this.setState({ skills: skillsInputs });
  }

  handleLanguageInputsChange(languageInputs) {
    this.setState({ languages: languageInputs });
  }

  handleExperienceInputsChange(experienceInputs) {
    this.setState({ experience: experienceInputs });
  }

  setRef(ref) {
    this.inputRef = ref;
  }

  handleExample() {
    this.setState({
      photo: "/images/template_avatar.png",
      firstName: "Jim",
      lastName: "Halpert",
      jobTitle: "Assistant Regional Manager",
      phoneNumber: "+24 444 444 444",
      email: "jimhalpert@dundermifflin.com",
      address: "Scranton, Pennsylvania",
      personalDescription:
        "Hey there, I'm Jim, and I'm all about building connections - whether it's with clients at work or with the people in my personal life. I'm a creative problem solver and a natural communicator, and I love nothing more than working with a team to come up with innovative solutions. When I'm not working, you can usually find me playing practical jokes on my co-worker, Dwight, or spending quality time with my amazing wife and kids.",
      education: [
        {
          id: 0,
          graduation: "2007",
          name: "University of Scranton",
          title: "Bachelor in Business Administration",
        },
        {
          id: 1,
          graduation: "2007",
          name: "University of Scranton",
          title: "Minor in Marketing",
        },
      ],
      skills: [
        { id: 0, skill: "Interpersonal skills" },
        { id: 1, skill: "Salesmanship" },
        { id: 2, skill: "Strategic thinking" },
        { id: 3, skill: "Teamwork" },
        { id: 4, skill: "Time management" },
      ],
      languages: [{ id: 0, language: "English" }],
      experience: [
        {
          id: 0,
          time: "2002-2013",
          company: "Dunder Mifflin Paper Company - Scranton, PA",
          position: "Sales Representative",
          description:
            "As a Sales Representative at Dunder Mifflin Paper Company in Scranton, PA, I was responsible for developing and maintaining client relationships, identifying new business opportunities, and ensuring customer satisfaction with our products and services. During my tenure from 2002 to 2013, I consistently met and exceeded sales targets while collaborating with various departments within the company, including accounting, customer service, and marketing. In addition to my core responsibilities, I had the privilege of leading the company's regional sports marketing initiative, which was instrumental in increasing our brand recognition and expanding our customer base. Furthermore, I developed a reputation among my colleagues as a highly skilled negotiator and an adept communicator, which served me well in building lasting relationships with clients.",
        },
        {
          id: 1,
          time: "2000-2002",
          company: "Innovatech Solutions - Scranton, PA",
          position: "Account Manager",
          description:
            "In this role, I was responsible for managing a portfolio of key accounts and ensuring their satisfaction with our logistics services, which included transportation, warehousing, and supply chain management solutions. One of my biggest accomplishments in this role was securing a new contract with a major e-commerce retailer, which helped the company achieve significant revenue growth that year. I achieved this by identifying the client's specific logistics needs and proposing tailored solutions that addressed their pain points and provided added value. In addition to managing existing accounts, I also worked closely with the sales team to identify and pursue new business opportunities. This included participating in sales pitches and presentations, conducting market research and analysis, and attending industry events and conferences.",
        },
      ],
    });
  }

  handleReset() {
    this.setState({
      photo: "/images/placeholder_avatar.png",
      firstName: "",
      lastName: "",
      jobTitle: "",
      phoneNumber: "",
      email: "",
      address: "",
      personalDescription: "",
      education: [],
      skills: [],
      languages: [],
      experience: [],
      resetKey: this.state.resetKey + 1,
    });
  }

  render() {
    return (
      <div className="main">
        <Forms
          key={this.state.resetKey}
          onPhotoChange={this.handlePhotoChange}
          onFirstNameChange={this.handleFirstNameChange}
          onLastNameChange={this.handleLastNameChange}
          onJobTitleChange={this.handleJobTitleChange}
          onPhoneNumberChange={this.handlePhoneNumberChange}
          onEmailChange={this.handleEmailChange}
          onAddressChange={this.handleAddressChange}
          onPersonalDescriptionChange={this.handlePersonalDescriptionChange}
          onEducationInputsChange={this.handleEducationInputsChange}
          onSkillsInputsChange={this.handleSkillsInputsChange}
          onLanguageInputsChange={this.handleLanguageInputsChange}
          onExperienceInputsChange={this.handleExperienceInputsChange}
          contentRef={this.myRef}
          onExample={this.handleExample}
          onReset={this.handleReset}
        />
        <Display
          photo={this.state.photo}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          jobTitle={this.state.jobTitle}
          phoneNumber={this.state.phoneNumber}
          email={this.state.email}
          address={this.state.address}
          personalDescription={this.state.personalDescription}
          education={this.state.education}
          skills={this.state.skills}
          languages={this.state.languages}
          experience={this.state.experience}
          setRef={this.myRef}
        />
      </div>
    );
  }
}

export default Main;
