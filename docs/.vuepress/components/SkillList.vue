<template>
    <div>
      <ul class="Skills">
        <li style="font-size: 20px">Skills:</li>
        <li style="background: #bef389; color: #dcaeff">ECMAScript</li>
        <li style="background: #e6ffff; color: #a791ff">CSS3</li>
        <li style="background: #d1abff">React</li>
        <li style="background: #ffa791">NodeJs</li>
        <li style="background: #92d9ff">JAVA</li>
        <li style="background: #befbf1; color: #559fdf">VUE</li>
      </ul>
    </div>
    <!-- 技能板块 -->
    <div id="diagram"></div>
  </template>
  <script setup lang="ts">
  import { onMounted, ref, ComputedRef, computed } from "vue";
  import type { Skill } from "../../shared/options";
  import { useThemeLocaleData } from "../composables";
  // import Raphael from "../utils/raphael";
  // import Raphael from "raphael";
  let Raphael;
  const useSkillsConfig = (): ComputedRef<Skill[]> => {
    const themeLocale = useThemeLocaleData();
    return computed(() => themeLocale.value.skills as Skill[]);
  };
  const skills = useSkillsConfig();
  // const skills = ref([
  //   {
  //     text: "ECMAScript",
  //     value: "80",
  //     color: "#bef389"
  //   },
  //   {
  //     text: "CSS3",
  //     value: "80",
  //     color: "#e6ffff"
  //   },
  //   {
  //     text: "React",
  //     value: "80",
  //     color: "#d1abff"
  //   },
  //   {
  //     text: "NodeJs",
  //     value: "62",
  //     color: "#ffa791"
  //   },
  //   {
  //     text: "JAVA",
  //     value: "80",
  //     color: "#92d9ff"
  //   },
  //   {
  //     text: "VUE",
  //     value: "88",
  //     color: "#befbf1"
  //   }
  // ]);
  const randoms = (l, u) => {
    return Math.floor(Math.random() * (u - l + 1) + l);
  };
  // 画图
  const diagram = () => {
    // 先画个圆，skills
    var r = Raphael("diagram", 600, 600),
      rad = 73,
      defaultText = "Skills",
      speed = 250;
    r.circle(300, 300, 85).attr({
      stroke: "none",
      fill: "#233c48"
    });
    var title = r
      .text(300, 300, defaultText)
      .attr({
        font: "20px Arial",
        fill: "#fff"
      })
      .toFront();
    r.customAttributes.arc = function (value, color, rad) {
      var v = 3.6 * value,
        alpha = v == 360 ? 359.99 : v,
        random = randoms(91, 240),
        a = ((random - alpha) * Math.PI) / 180,
        b = (random * Math.PI) / 180,
        sx = 300 + rad * Math.cos(b),
        sy = 300 - rad * Math.sin(b),
        x = 300 + rad * Math.cos(a),
        y = 300 - rad * Math.sin(a),
        path = [
          ["M", sx, sy],
          ["A", rad, rad, 0, +(alpha > 180), 1, x, y]
        ];
      return {
        path: path,
        stroke: color
      };
    };
    skills.value.forEach(({ color, value, text }) => {
      rad += 30;
      var z = r.path().attr({
        arc: [value, color, rad],
        "stroke-width": 26
      });
      z.mouseover(function () {
        //@ts-ignore
        this.animate(
          {
            "stroke-width": 50,
            opacity: 0.75
          },
          1000,
          "elastic"
        );
        if (Raphael.type != "VML") {
          //@ts-ignore
          this.toFront();
        }
        title.stop().animate(
          {
            opacity: 0
          },
          speed,
          ">",
          function () {
            //@ts-ignore
  
            this.attr({
              text: text + "\n" + value + "%"
            }).animate(
              {
                opacity: 1
              },
              speed,
              "<"
            );
          }
        );
      }).mouseout(function () {
        //@ts-ignore
        this.stop().animate(
          {
            "stroke-width": 26,
            opacity: 1
          },
          speed * 4,
          "elastic"
        );
        title.stop().animate(
          {
            opacity: 0
          },
          speed,
          ">",
          function () {
            title
              .attr({
                text: defaultText
              })
              .animate(
                {
                  opacity: 1
                },
                speed,
                "<"
              );
          }
        );
      });
    });
  };
  onMounted(() => {
      // import("../utils/raphael.js").then((module) => {
      //   Raphael = module.default;
      //   diagram();
      // });
    //   diagram();
    import("raphael").then((module) => {
      Raphael = module.default;
      diagram();
    });
  });
  </script>
  
  <style scoped>
  .Skills {
    display: flex;
    color: white;
    font-size: 16px;
  }
  
  .Skills li {
    margin: 6px;
    width: 100px;
    text-align: center;
    height: 38px;
    line-height: 38px;
  }
  
  .Skills li + li {
    margin-left: 0;
    margin-right: 0;
  }
  </style>
  