export default [
  {
    title: "topic one",
    level: "beginner",
    tags: ["one", "two", "three"],
    description: "some topic to test data",
    subtopics: [
      {
        title: "topic two",
        level: "intermediate",
        tags: ["one", "two", "three"],
        description: "some topic to test data",
        subtopics: [
          {
            title: "topic three",
            level: "beginner",
            tags: ["one", "two", "three"],
            description: "some topic to test data",
            subtopics: [],
            md: require("../views/test.md"),
          },
        ],
        md: require("../views/test.md"),
      },
    ],
    md: require("../views/test.md"),
  },
];
