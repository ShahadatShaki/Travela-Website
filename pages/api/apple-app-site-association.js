// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const response = {
    applinks: {
      apps: [],
      details: [
        {
          appID: "tkhabbab.travela.tt.tk.travela",
          paths: ["*"],
        },
      ],
    },
  };
  res.status(200).json(response);
}
