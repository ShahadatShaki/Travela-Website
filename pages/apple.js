export default function Apple() {
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

  return (
    <div><pre>{JSON.stringify(response, null, 2) }</pre></div>
  )
}
