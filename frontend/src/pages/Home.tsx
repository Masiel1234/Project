import React from "react";
import Button from "../components/button/Button"; 
import MainHeading from "../components/heading/MainHeading";
import BackgroundHome from "../components/background/BackgroundHome";



const Home: React.FC = () => {

  return (
    <BackgroundHome>
      <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <MainHeading title="Quiz Note"/>
      <div className="flex flex-col justify-between w-full max-w-md px-6">
      <Button name="Sign in" to="/login" variant="primary" />
      <Button name="Sign up" to="/register" variant="secondary"/>
      
      </div>
      </div>
    </BackgroundHome>
  );
};

export default Home;