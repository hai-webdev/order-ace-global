import Mock from "mockjs";

Mock.mock(/^\/api\.php\/cms\/nav(\/scode\/.+)+$/, "get", () => {
  const data = {
    "id|+1": 1,
    acode: "cn",
    mcode: "1",
    pcode: "0",
    scode: "@id",
    name: "@ctitle(2,6)",
    listtpl: "",
    contenttpl: "",
    status: 1,
    outlink: "",
    subname: "@ctitle(2,6)",
    ico: "@image('300x200', '#000', '#fff', 'random Image')",
    pic: "@image('1920x680', '#000', '#fff', 'random Image')",
    title: "@ctitle",
    keywords: "@cparagraph(3,7)",
    description: "@cparagraph(3,7)",
    filename: "et",
    sorting: "255",
    create_user: "admin",
    update_user: "admin",
    create_time: "@now",
    update_time: "@now",
    gtype: "4",
    gid: "0",
    gnote: "",
    type: "1",
  };
  return Mock.mock({
    code: 1,
    "rowtotal|1-7": 1,
    "data|1-7": [
      {
        ...data,
        "son|0-7": [
          {
            ...data,
            "son|0-7": [data],
          },
        ],
      },
    ],
  });
});
Mock.mock(/^\/api\.php\/cms\/nav$/, "get", () => {
  return Mock.mock({
    code: 1,
    rowtotal: 4,
    data: [
      {
        id: 1,
        acode: "cn",
        mcode: "1",
        pcode: "0",
        scode: "@id",
        name: "ABOUT US",
        listtpl: "",
        contenttpl: "",
        status: 1,
        outlink: "",
        subname: "@ctitle(2,6)",
        ico: "@image('300x200', '#000', '#fff', 'random Image')",
        pic: "@image('1920x680', '#000', '#fff', 'random Image')",
        title: "@ctitle",
        keywords: "@cparagraph(3,7)",
        description: "@cparagraph(3,7)",
        filename: "et",
        sorting: "255",
        create_user: "admin",
        update_user: "admin",
        create_time: "@now",
        update_time: "@now",
        gtype: "4",
        gid: "0",
        gnote: "",
        type: "1",
        son: [
          {
            id: 5,
            acode: "cn",
            mcode: "1",
            pcode: "0",
            scode: "@id",
            name: "COMPANY",
            listtpl: "",
            contenttpl: "",
            status: 1,
            outlink: "",
            subname: "@ctitle(2,6)",
            ico: "@image('300x200', '#000', '#fff', 'random Image')",
            pic: "@image('1920x680', '#000', '#fff', 'random Image')",
            title: "@ctitle",
            keywords: "@cparagraph(3,7)",
            description: "@cparagraph(3,7)",
            filename: "et",
            sorting: "255",
            create_user: "admin",
            update_user: "admin",
            create_time: "@now",
            update_time: "@now",
            gtype: "4",
            gid: "0",
            gnote: "",
            type: "1",
          },
          {
            id: 6,
            acode: "cn",
            mcode: "1",
            pcode: "0",
            scode: "@id",
            name: "OUR SPONSOR",
            listtpl: "",
            contenttpl: "",
            status: 1,
            outlink: "",
            subname: "@ctitle(2,6)",
            ico: "@image('300x200', '#000', '#fff', 'random Image')",
            pic: "@image('1920x680', '#000', '#fff', 'random Image')",
            title: "@ctitle",
            keywords: "@cparagraph(3,7)",
            description: "@cparagraph(3,7)",
            filename: "et",
            sorting: "255",
            create_user: "admin",
            update_user: "admin",
            create_time: "@now",
            update_time: "@now",
            gtype: "4",
            gid: "0",
            gnote: "",
            type: "1",
          },
          {
            id: 7,
            acode: "cn",
            mcode: "1",
            pcode: "0",
            scode: "@id",
            name: "OUR TEAM",
            listtpl: "",
            contenttpl: "",
            status: 1,
            outlink: "",
            subname: "@ctitle(2,6)",
            ico: "@image('300x200', '#000', '#fff', 'random Image')",
            pic: "@image('1920x680', '#000', '#fff', 'random Image')",
            title: "@ctitle",
            keywords: "@cparagraph(3,7)",
            description: "@cparagraph(3,7)",
            filename: "et",
            sorting: "255",
            create_user: "admin",
            update_user: "admin",
            create_time: "@now",
            update_time: "@now",
            gtype: "4",
            gid: "0",
            gnote: "",
            type: "1",
          },
        ],
      },
      {
        id: 2,
        acode: "cn",
        mcode: "1",
        pcode: "0",
        scode: "@id",
        name: "OUR STRATEGY",
        listtpl: "",
        contenttpl: "",
        status: 1,
        outlink: "",
        subname: "@ctitle(2,6)",
        ico: "@image('300x200', '#000', '#fff', 'random Image')",
        pic: "@image('1920x680', '#000', '#fff', 'random Image')",
        title: "@ctitle",
        keywords: "@cparagraph(3,7)",
        description: "@cparagraph(3,7)",
        filename: "et",
        sorting: "255",
        create_user: "admin",
        update_user: "admin",
        create_time: "@now",
        update_time: "@now",
        gtype: "4",
        gid: "0",
        gnote: "",
        type: "1",
      },
      {
        id: 3,
        acode: "cn",
        mcode: "1",
        pcode: "0",
        scode: "@id",
        name: "INVESTOR RELATION",
        listtpl: "",
        contenttpl: "",
        status: 1,
        outlink: "",
        subname: "@ctitle(2,6)",
        ico: "@image('300x200', '#000', '#fff', 'random Image')",
        pic: "@image('1920x680', '#000', '#fff', 'random Image')",
        title: "@ctitle",
        keywords: "@cparagraph(3,7)",
        description: "@cparagraph(3,7)",
        filename: "et",
        sorting: "255",
        create_user: "admin",
        update_user: "admin",
        create_time: "@now",
        update_time: "@now",
        gtype: "4",
        gid: "0",
        gnote: "",
        type: "1",
      },
      {
        id: 4,
        acode: "cn",
        mcode: "1",
        pcode: "0",
        scode: "@id",
        name: "CONTACT US",
        listtpl: "",
        contenttpl: "",
        status: 1,
        outlink: "",
        subname: "@ctitle(2,6)",
        ico: "@image('300x200', '#000', '#fff', 'random Image')",
        pic: "@image('1920x680', '#000', '#fff', 'random Image')",
        title: "@ctitle",
        keywords: "@cparagraph(3,7)",
        description: "@cparagraph(3,7)",
        filename: "et",
        sorting: "255",
        create_user: "admin",
        update_user: "admin",
        create_time: "@now",
        update_time: "@now",
        gtype: "4",
        gid: "0",
        gnote: "",
        type: "1",
      },
    ],
  });
});
