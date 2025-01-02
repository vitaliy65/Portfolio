import React from "react";
import Heading from "../components/Heading";
import Card from "../components/Card";

export default function Works() {
  return (
    <div class="px-4 pt-20">
      <Heading>Works</Heading>
      <div class="grid md:grid-cols-2 grid-cols-1 gap-6 pt-4">
        <Card
          img="/LibraryApp.jpg"
          title="Library-app"
          to="https://github.com/vitaliy65/library-app"
        >
          My course project where I learned how to use node.js and connect to
          the database with it. How to use routes to interact with front-end.
        </Card>
        <Card
          img="/officeUA.jpg"
          title="OfficeUA - web-site"
          to="https://github.com/vitaliy65/Office-UA"
        >
          Assignments from the JavaScript course - creating your own website
          based on React, gaining skills in front-end development.
        </Card>
        <Card
          img="/telegramBot.jpg"
          title="Telegram Bot"
          to="https://github.com/vitaliy65/first_telegram_Bot"
        >
          A course work to acquire skills in developing bots for Telegram.
        </Card>
        <Card
          img="/OpenGL.jpg"
          title="Work with OpenGL"
          to="https://github.com/vitaliy65/library-app"
        >
          A course of several tasks for creating 3D graphics using OpenGL,
          studied for creating games, this is the first part of a course
          consisting of three...
        </Card>
      </div>
    </div>
  );
}
