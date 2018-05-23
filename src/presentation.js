// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Notes,
} from 'spectacle';

import CodeSlide from 'spectacle-code-slide';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'black',
    secondary: 'white',
    tertiary: '#00AA00',
    quartenary: '#FEFEfE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    console.log(theme);
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            What if we &lt;JSX/&gt; devops
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            small crazy science experiment <span style={{
              textDecoration: "line-through",
              color: "red"
            }}>failed</span>
          </Text>
          <Notes>
            <ol>
              <li>My name is Łukasz, got 5 minutes only, so intro on the end</li>
              <li>Will just storm through slides</li>
              <li>It's DON'T do it at home scenario</li>
              <li>It's for frontend who learn devops/backend</li>
              <li>It's for fullstack who build tools</li>
              <li>It's for who want to know mechanics/limits of JSX</li>
            </ol>
          </Notes>
        </Slide>
        <Slide
          transition={['zoom', 'slide']}
        >
          <Heading size={6} textColor="secondary" caps>
            Problem
          </Heading>
          <List>
            <ListItem>Infrastructure is hard</ListItem>
            <ListItem>Tools are difficult</ListItem>
            <ListItem>Tools use in different languages</ListItem>
            <ListItem>Hosts are specific</ListItem>
          </List>
          <Notes>
            <ol>
              <li>Understand hosting, webservers, SSL, CDNs, etc.</li>
              <li>Many, various, different configs, make problems when work together</li>
              <li>Some in ruby, some in python, some in other</li>
              <li>AWS setup will be different to Azure, to Heroku, etc</li>
              <li>Even Docker can fail your expectations</li>
            </ol>
          </Notes>
        </Slide>
        <Slide
          transition={['zoom', 'slide']}
        >
          <Heading size={6} textColor="secondary" caps>
            &lt;JSX/&gt; solves everything
          </Heading>
          <List>
            <ListItem>Build web</ListItem>
            <ListItem>Server-side render</ListItem>
            <ListItem>Build mobile app</ListItem>
            <ListItem>Build PDFs</ListItem>
            <ListItem>Build Presentations</ListItem>
            <ListItem>...</ListItem>
          </List>
          <Notes>
            <ol>
              <li>We already use JSX as abstraction</li>
              <li>You build static and dynamic websites</li>
              <li>You can do rendering on server-side</li>
              <li>You can build iOS and Android</li>
              <li>There are libs allowing you to build documents</li>
              <li>or slides like this one</li>
            </ol>
          </Notes>
        </Slide>
        <CodeSlide
          transition={['zoom']}
          lang="js"
          code={
            `<App>
    <Router>
      <Route path="/" render={
        <Page>
          ...
        </Page>
      }/>
    </Router>
</App>
          `}
          ranges={[
            { loc: [0, 10], title: "If you can wrap whole app like that" },
          ]}
          color={theme.screen.colors.secondary}
        />
        <CodeSlide
          transition={['zoom']}
          lang="js"
          color="white"
          code={
            `[...domains]
  .map(domain => 
    <OutOfTheBoxHosting={domain}>
      <Frontend>
        <App>
          <Router>
            <Route path="/" render={
              <Page/>
            }/>
          </Router>
        </App>
      </Frontend>
      <Backend>
        <Route path="/ssr" render={
          <Page/>
        }/>          
        <RestEndpoint 
          method="post" 
          path="/" 
          function="./serverless" 
          handler="index.hander"
        />
        <Storage name="uploads"/>
      </Backend>
  </OutOfTheBoxHosting>`}
          ranges={[
            { loc: [2, 8], title: "Why not wrap it in deployment script?" },
            { loc: [0, 8], title: "and make it flexible" },
            { loc: [12, 16], title: "and share code with backend" },
            { loc: [16, 22], title: "or describe backend logic" },
            { loc: [22, 23], title: "or resources" },
          ]}
        />
        <CodeSlide
          transition={['zoom']}
          lang="js"
          color="white"
          code={
            `<NPMGlobal dependency="gatsby-cli">
  <RimRaf path="gatsby-site">
      <Exec cmd="gatsby new gatsby-site">
          <Cd path="gatsby-site">
              <Exec cmd="gatsby build">
                  <Cd path="public" />
              </Exec>
          </Cd>
      </Exec>
  </RimRaf>
</NPMGlobal>`}
          ranges={[
            { loc: [0, 12], title: "So you can do that!" },
            { loc: [0, 0], title: "DON'T!" },
          ]}
        />
        <Slide
          transition={['zoom', 'slide']}
        >
          <Heading size={6} textColor="secondary" caps>
            &lt;JSX&gt; doesn't solve everything
          </Heading>
          <List>
            <ListItem>JSX describe state, not the process</ListItem>
            <ListItem>render function = (props, state) => VirtualDOM</ListItem>
            <ListItem>render function != (props, state) => result</ListItem>
          </List>
        </Slide>
        <Slide
          transition={['zoom', 'slide']}
        >
          <Heading size={6} textColor="secondary" caps>
            &lt;JSX&gt; doesn't solve everything
          </Heading>
          <List>
            <ListItem>VirtualDOM can be applied asynchronously</ListItem>
            <ListItem>But render methods can't be asynchronous</ListItem>
            <ListItem>Async JSX render = side effects</ListItem>
          </List>
        </Slide>
        <Slide
          transition={['zoom', 'slide']}
        >
          <Heading size={6} textColor="secondary" caps>
            &lt;JSX&gt; doesn't solve everything
          </Heading>
          <List>
            <ListItem>Rewriting complex tools using abstraction makes them more complex</ListItem>
          </List>
        </Slide>
        <Slide
          transition={['zoom', 'slide']}
        >
          <Heading size={6} textColor="secondary" caps>
            &lt;JSX&gt; could solve
          </Heading>
          <List>
            <ListItem>Generate infrastructure scripts</ListItem>
            <ListItem>Build reactive infrastructure deploy plans</ListItem>
            <ListItem>Abstract devops</ListItem>
          </List>
        </Slide>
        <Slide
          transition={['zoom', 'slide']}
        >
          <Heading size={6} textColor="secondary" caps>
            Like it?
          </Heading>
          <p>Help <a
            href="https://github.com/react-ops"
            style={{
              color: "lime"
            }}
          >https://github.com/react-ops</a></p>
        </Slide>
        <Slide
          transition={['zoom', 'slide']}
        >
          <Heading size={6} textColor="secondary" caps>
            What works today?
          </Heading>
          <List>
            <ListItem>S3 + CloudFront + Route53 + AWS CM</ListItem>
            <ListItem>App Engine</ListItem>
            <ListItem>Github Pages</ListItem>
            <ListItem>Netlify</ListItem>
            <ListItem>...million others with the same problems</ListItem>
            <ListItem>AWS Mobile</ListItem>
          </List>
        </Slide>
        <CodeSlide
          transition={['zoom']}
          lang="js"
          color="white"
          code={
            `create-react-app my-app my-template
cd my-app
awsmobile init
? Where is your project's source directory:  src
? Where is your project's distribution directory to store build artifacts:  build
? What is your project's build command:  npm run-script build
? What is your project's start command for local test run:  npm run-script start
? What awsmobile project name would you like to use:  YOUR-APP-NAME-2017-11-10-15-17-48
awsmobile run
awsmobile publish
awsmobile publish --test`}
          ranges={[
            { loc: [0, 2], title: "Create react app" },
            { loc: [2, 3], title: "Init AWS Mobile" },
            { loc: [3, 4], title: "Answer basic questions" },
            { loc: [4, 5], title: "Answer basic questions" },
            { loc: [5, 6], title: "Answer basic questions" },
            { loc: [6, 7], title: "Answer basic questions" },
            { loc: [7, 8], title: "Answer basic questions" },
            { loc: [8, 9], title: "Run" },
            { loc: [9, 10], title: "Deploy" },
            { loc: [10, 11], title: "Test" }
          ]}
        />

        <Slide
          transition={['zoom', 'slide']}
        >
          <Heading size={6} textColor="secondary" caps>
            Out of the box
          </Heading>
          <List>
            <ListItem>Hosting setup</ListItem>
            <ListItem>Performance tests</ListItem>
            <ListItem>Lambda and API Gateway integration</ListItem>
            <ListItem>Cognito</ListItem>
            <ListItem>Analytics</ListItem>
            <ListItem>Database</ListItem>
            <ListItem>File storage</ListItem>
            <ListItem>Amplify frontend lib</ListItem>
            <ListItem>iOS, Android, Web, React Native, Unity, Xamarin</ListItem>
            <ListItem>aws.amazon.com/mobile/resources</ListItem>
          </List>
        </Slide>
        <Slide
          transition={['zoom', 'slide']}
        >
          <Heading size={6} textColor="secondary" caps>
            So, Sorry serverless framework
          </Heading>
          <Image src="https://media.giphy.com/media/fDO2Nk0ImzvvW/giphy.gif"/>
        </Slide>
        <Slide
          transition={['zoom', 'slide']}
        >
          <Heading size={3} textColor="secondary" caps>
            Thank you
          </Heading>
          <Heading size={6} textColor="secondary" caps>
            @sielay => twitter | github | insta
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
