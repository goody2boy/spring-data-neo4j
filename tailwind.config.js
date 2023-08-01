/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ghostwhite: "#f3f5fa",
        "text-color-02": "#8a8a8c",
        black: {
          "100": "#1c1c1f",
          "200": "#000",
        },
        st: "#783efd",
        green: "#3ecd7b",
        nd: "#fe8f66",
        "yellow-02": "#ffcc40",
        black1: "#0d1118",
        white: "#fff",
        st1: "#5d4e7b",
        "grey-mid": "#838690",
        red: "#f32323",
        black2: "#1e253a",
        green1: "#34c98e",
        deeppink: "#d70f64",
        whitesmoke: "#f0edea",
        "text-2": "#6b6570",
        "text-21": "#151630",
        lavender: {
          "100": "#e3e0ff",
          "200": "#dae3f7",
        },
        honeydew: "#d7f8e8",
        "text-color": "#777e8a",
        "pallet-3-primary": "#4f46ba",
        midnightblue: "#171060",
        lightslategray: "#8a8b9f",
        purple: "#4e36fc",
        "studio-darkmode-maincta-457eff": "#457eff",
        "studio-darkmode-explainertext-485269": "#485269",
        mediumseagreen: "#4fc786",
        slateblue: "#6967da",
        darkslategray: {
          "100": "#484f5e",
          "200": "#40495e",
        },
        indianred: "#f4596c",
        "studio-darkmode-popuplabels-5e6a86": "#5e6a86",
        darkslateblue: "#3b5998",
      },
      fontFamily: {
        "dm-sans": "'DM Sans'",
        tomorrow: "Tomorrow",
        poppins: "Poppins",
        roboto: "Roboto",
        alegreya: "Alegreya",
        "source-code-pro": "'Source Code Pro'",
      },
      borderRadius: {
        smi: "13px",
        "3xs": "10px",
        "12xs": "1px",
        "smi-9": "12.9px",
        "5xs-5": "7.5px",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      xl: "20px",
      base: "16px",
      "2xl": "21px",
      mid: "17px",
      "2xs": "11px",
      "3xl": "22px",
      "11xl": "30px",
      lg: "18px",
      "lg-7": "18.7px",
      "20xl-9": "39.9px",
      "11xl-4": "30.4px",
      "6xl-7": "25.7px",
      "xs-9": "11.9px",
      "27xl-7": "46.7px",
      "xs-6": "11.6px",
    },
    screens: {
      lg: {
        max: "1300px",
      },
      md: {
        max: "1050px",
      },
      sm: {
        max: "600px",
      },
      mq500small: {
        raw: "screen and (max-width: 500px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
