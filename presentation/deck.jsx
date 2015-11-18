import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
  city: require("./city.jpg"),
  kat: require("./kat.png"),
  logo: require("./formidable-logo.svg"),
  rock: require("./30rock.gif"),
  jes: require("./jes.jpg")
};

preloader([images.city, images.kat, images.rock]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} fit caps lineHeight={1} textColor="black">
            Future of Web Apps
          </Heading>
          <Heading size={1} fit caps>
            The Internet of Things (IoT)
          </Heading>
          <Heading size={4} fit caps textColor="black">
            A presentation by Miss Tairema Dailey
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              The Internet of Things (IoT) 
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit textColor="tertiary">
              is the network of physical objects or "things" 
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={1} caps fit textColor="primary">
              embedded with electronics, software, sensors, and network connectivity
            </Heading>
          </Appear>
          <Appear fid="4">
            <Heading size={1} caps fit textColor="primary">
              which enables these objects to collect and exchange data.
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
          <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
          <Heading size={1} fit textColor="primary" textFont="secondary">
            Wait what?
          </Heading>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
         <Heading size={4} fit caps textColor="black">
            Yes! That was the theme for this conference...
          </Heading>
          <Image src={images.rock.replace("/", "")} margin="0px auto 40px" height="293px"/>
        </Slide>
         <Slide transition={["slide"]} bgColor="primary">
        
            <Heading size={1} caps fit textColor="black">
              What did they really talk about??? 
            </Heading>
        
          <Appear fid="1">
            <Heading size={1} caps fit textColor="tertiary">
              Miscellaneous Crap...
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={2} caps fit textColor="black">
              Yep...I said it!
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={2} caps fit textColor="black">
              But I&prime;ll talk about the crap I did like...
            </Heading>
          </Appear>
        </Slide>
        
        <Slide transition={["slide"]} bgColor="black">
          <Heading size={1} caps fit textColor="tertiary">
          Like this react.js presentation slider...
          </Heading>
          <Appear fid="1">
            <Heading size={1} caps fit textColor="tertiary">
              Your girl got skillz!
            </Heading>
            </Appear>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Real Time
          </Heading>
          <Heading caps fit size={1} textColor="secondary">
            Applications
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <List>
            <ListItem><Appear fid="1">Slack - real time chatting </Appear></ListItem>
            <ListItem><Appear fid="2">Uber - real time location tracking</Appear></ListItem>
            <ListItem><Appear fid="3">Google Docs - real time collaboration</Appear></ListItem>
            <ListItem><Appear fid="4">Instagram - real time picture updates</Appear></ListItem>
            <ListItem><Appear fid="5">And the list can go on...</Appear></ListItem>
            <ListItem><Appear fid="6">So...</Appear></ListItem>
          </List>
        </Slide>
         <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            The possibilities are endless...
          </Heading>
          <Heading caps fit size={1} textColor="secondary">
            with real time applications
          </Heading>
        </Slide>
         <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              For example the human body... 
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit textColor="tertiary">
              Why can&prime;t we fit into the equation.. 
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={1} caps fit textColor="primary">
              Grindhouse Wetware is doing just that...
            </Heading>
          </Appear>
          <Appear fid="4">
            <Heading size={1} caps fit textColor="primary">
              with biohacking.
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
          <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
          <Heading size={1} fit textColor="primary" textFont="secondary">
            Bio what?
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <BlockQuote>
            <Quote textSize="20">We believe that with imagination and drive, any of us can feel and touch EMF fields, explore its contours, sense the temperature of objects across a room, navigate a room using a sonar sense, or even connect the body to the Internet - right now. It is that dream above all that drives us to create.</Quote>
            <Cite>Grindhouse Wetware</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
        <Heading size={1} caps fit textColor="primary">
              Somethings they are working on...
            </Heading>
          <List>
            <ListItem textSize="24"><Appear fid="1">implantable device that can read biomedical data to the internet via bluetooth </Appear></ListItem>
            <ListItem textSize="24"><Appear fid="2">implanted magnet taking large data such as Wi-Fi, sonar, or thermal information</Appear></ListItem>
            <ListItem textSize="24"><Appear fid="3">subdermal star implant that lights up under your skin</Appear></ListItem>
          </List>
          <Appear fid="4"><Image src={images.jes.replace("/", "")} margin="0px auto 40px" height="293px"/></Appear>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Another cool thing mentioned...
          </Heading>
          <Heading caps fit size={1} textColor="secondary">
            <Link href="http://dweet.io/" target="_blank">dweet.io</Link>
          </Heading>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="black">
        <Appear fid="1">
          <Heading caps fit size={1} textColor="tertiary">
            And how are they building these apps you ask??
          </Heading>
          </Appear>
          <Appear fid="2">
          <Heading caps fit size={1} textColor="primary">
            you can build them using
          </Heading>
          </Appear>
          <List>
          <ListItem textColor="primary"><Appear fid="3"><Link href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" target="_blank">Websockets API</Link></Appear></ListItem>
          <ListItem textColor="primary"><Appear fid="4"><Link href="http://socket.io/" target="_blank">Socket.io</Link></Appear></ListItem>
          <ListItem textColor="primary"><Appear fid="5"><Link href="http://firehose.io/" target="_blank">Firehose</Link></Appear></ListItem>
          <ListItem textColor="primary"><Appear fid="6">And more...</Appear></ListItem>
          </List>
        </Slide>



        <Slide transition={["slide"]} bgColor="primary">
         <Heading size={1} caps fit textColor="tertiary">
            And a cool thing about this react.js spectacle...
          </Heading>
          <Heading size={1} caps fit textColor="tertiary">
            Your presentations are interactive
          </Heading>
          <Interactive/>
        </Slide>
        <Slide transition={["spin", "slide"]} bgColor="tertiary">
          <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
            That&prime;s All Folks!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
