const mainTopics = [
  {
    title: "topic one",
    level: "beginner",
    tags: ["one", "two", "three"],
    description: "some topic to test data",
    subtopics: [
      {
        title: "topic one",
        level: "beginner",
        tags: ["one", "two", "three"],
        description: "some topic to test data",
        subtopics: [],
        md: require("../views/test.md"),
        readAt: new Date()
      },
    ],
    md: require("../views/test.md"),
    readAt: new Date()
  },
];

export default mainTopics;