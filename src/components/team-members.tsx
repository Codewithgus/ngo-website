import { Flex, Heading } from "@chakra-ui/react";
import { Avatar } from "./ui/avatar";
import BoxTeamMembers from "./custom-component/box-team-members";
import BoxTeamInner from "./custom-component/box-team-inner";
import BoxInnerHeading from "./custom-component/box-team-heading";
import BoxTeamText from "./custom-component/box-team-text";

const Team = () => {
  return (
    <>
      <Heading textTransform={"capitalize"} textAlign={"center"} mt={10}>
        our team members
      </Heading>

      <Flex
        gap={5}
        direction={{ base: "column", lg: "row" }}
        p={5}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <BoxTeamMembers>
          <Avatar name="gus gayflor" left={150} top={10} size={"2xl"} />

          <BoxTeamInner>
            <BoxInnerHeading>name</BoxInnerHeading>
            <BoxTeamText>member profile goes here.</BoxTeamText>
          </BoxTeamInner>
        </BoxTeamMembers>
        <BoxTeamMembers>
          <Avatar name="pinky gayflor" left={150} top={10} size={"2xl"} />

          <BoxTeamInner>
            <BoxInnerHeading>name</BoxInnerHeading>
            <BoxTeamText>member profile goes here.</BoxTeamText>
          </BoxTeamInner>
        </BoxTeamMembers>
        <BoxTeamMembers>
          <Avatar name="juah gayflor" left={150} top={10} size={"2xl"} />

          <BoxTeamInner>
            <BoxInnerHeading>name</BoxInnerHeading>
            <BoxTeamText>member profile goes here.</BoxTeamText>
          </BoxTeamInner>
        </BoxTeamMembers>
      </Flex>
    </>
  );
};

export default Team;
