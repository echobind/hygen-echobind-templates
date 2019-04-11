let config = {
  main: {
    filters: {
      tags: {
        only: [],
        ignore: []
      },
      branches: {
        only: [],
        ignore: ["master", "beta", "production"]
      }
    }
  },
  alpha: {
    filters: {
      tags: {
        only: [],
        ignore: []
      },
      branches: {
        only: ["master"],
        ignore: []
      }
    }
  },
  beta: {
    filters: {
      tags: {
        only: ["/^beta.*/"],
        ignore: []
      },
      branches: {
        only: [],
        ignore: ["/.*/"]
      }
    }
  },
  production: {
    filters: {
      tags: {
        only: ["/^beta.*/"],
        ignore: []
      },
      branches: {
        only: [],
        ignore: ["/.*/"]
      }
    }
  }
};

const COMMA_DELIMITED_LIST_MESSAGE =
  'Lists may contain a mix of branch/tags names and/or regular expressions. e.g. "master,/prefix-/.*/" or "master,beta,dev"';

const triggerPrompt = workflow => ({
  type: "form",
  name: "config",
  message: `Specify branches and tags as a comma delimited list that the ${workflow} build workflow should be triggered by:`,
  choices: [
    {
      name: "branches",
      message: 'Branches',
      initial: config[workflow].filters.branches.only.join(",").trim()
    },
    {
      name: "tags",
      message: 'Tags',
      initial: config[workflow].filters.tags.only.join(",").trim()
    }
  ],
  result: ({ branches = "", tags = "" }) => {
    config[workflow].filters.branches.only = branches
      .trim()
      .split(",")
      .filter(val => val);
    config[workflow].filters.tags.only = tags
      .trim()
      .split(",")
      .filter(val => val);

    return config;
  },
  footer: COMMA_DELIMITED_LIST_MESSAGE
});

const ignorePrompt = workflow => ({
  type: "form",
  name: "config",
  message: `Specify branches and tags as a comma delimited list that the ${workflow} build workflow should ignore:`,
  choices: [
    {
      name: "branches",
      message: "Branches",
      initial: config[workflow].filters.branches.ignore.join(",").trim()
    },
    {
      name: "tags",
      message: "Tags",
      initial: config[workflow].filters.tags.ignore.join(",").trim()
    }
  ],
  result: ({ branches = "", tags = "" }) => {
    config[workflow].filters.branches.ignore = branches
      .trim()
      .split(",")
      .filter(val => val);
    config[workflow].filters.tags.ignore = tags
      .trim()
      .split(",")
      .filter(val => val);

    return config;
  },
  footer: COMMA_DELIMITED_LIST_MESSAGE
});

module.exports = [
  {
    type: "form",
    name: "appCenterConfig",
    message: "Microsoft AppCenter Config:",
    footer:
      "App Center is used for test builds distributed when the alpha workflow runs.",
    validate: ({ teamName, androidAppName, iosAppName }) => {
      if (!teamName) {
        return "Team Name is required.";
      }
      if (!androidAppName) {
        return "Android App Name is required.";
      }
      if (!iosAppName) {
        return "iOS App Name is required.";
      }

      return true;
    },
    choices: [
      { type: 'input', name: "teamName", message: "Team Name:" },
      { type: 'input', name: "androidAppName", message: "Android App Name:" },
      { type: 'input', name: "iosAppName", message: "iOS App Name:" }
    ]
  },
  triggerPrompt("main"),
  ignorePrompt("main"),
  triggerPrompt("alpha"),
  ignorePrompt("alpha"),
  triggerPrompt("beta"),
  ignorePrompt("beta"),
  triggerPrompt("production"),
  ignorePrompt("production")
];
