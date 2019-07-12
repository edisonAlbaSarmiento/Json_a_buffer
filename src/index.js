import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const obj = {
    sections: [
      {
        title: "Cuidado personal",
        blocks: [
          {
            size: 3,
            data: {
              icon:
                "https://kypper-dev.s3.amazonaws.com/svg/super-app-icons/peluquerias.png",
              text: "Peluquerías",
              image:
                "https://s3.amazonaws.com/kypper-dev/MainViewServices/Peluquerias.png",
              aspectRatio: 1.66,
              nav: "DetailService",
              entity: {
                type: "category",
                properties: {
                  id: 53,
                  name: "Peluquerías",
                  shortDescription: null,
                  description: null,
                  iconName: null,
                  status: null,
                  parentId: 25
                }
              }
            }
          },
          {
            size: 3,
            children: [
              {
                size: 6,
                data: {
                  icon:
                    "https://kypper-dev.s3.amazonaws.com/svg/super-app-icons/bienestar.png",
                  text: "Bienestar",
                  image:
                    "https://s3.amazonaws.com/kypper-dev/MainViewServices/Bienestar.png",
                  aspectRatio: 0.67,
                  nav: "DetailService",
                  entity: {
                    type: "category",
                    properties: {
                      id: 45,
                      name: "Bienestar",
                      shortDescription: null,
                      description: null,
                      iconName: null,
                      status: null,
                      parentId: 25
                    }
                  }
                }
              },
              {
                size: 6,
                data: {
                  icon:
                    "https://kypper-dev.s3.amazonaws.com/svg/super-app-icons/depilacion.png",
                  text: "Depilación",
                  image:
                    "https://s3.amazonaws.com/kypper-dev/MainViewServices/Depilaci%C3%B3n.png",
                  aspectRatio: 0.67,
                  nav: "DetailService",
                  entity: {
                    type: "category",
                    properties: {
                      id: 54,
                      name: "Depilación",
                      shortDescription: null,
                      description: null,
                      iconName: null,
                      status: null,
                      parentId: 25
                    }
                  }
                }
              }
            ]
          },
          {
            size: 3,
            data: {
              icon:
                "https://kypper-dev.s3.amazonaws.com/svg/super-app-icons/unas.png",
              text: "Uñas",
              image:
                "https://s3.amazonaws.com/kypper-dev/MainViewServices/U%C3%B1as.png",
              aspectRatio: 0.67,
              nav: "DetailService",
              entity: {
                type: "category",
                properties: {
                  id: 55,
                  name: "Uñas",
                  shortDescription: null,
                  description: null,
                  iconName: null,
                  status: null,
                  parentId: 25
                }
              }
            }
          },
          {
            size: 3,
            data: {
              icon:
                "https://kypper-dev.s3.amazonaws.com/svg/super-app-icons/rostro_cuerpo.png",
              text: "Rostro y cuerpo",
              image:
                "https://s3.amazonaws.com/kypper-dev/MainViewServices/RostroCuerpo.png",
              aspectRatio: 0.67,
              nav: "DetailService",
              entity: {
                type: "category",
                properties: {
                  id: 56,
                  name: "Rostro y cuerpo",
                  shortDescription: null,
                  description: null,
                  iconName: null,
                  status: null,
                  parentId: 25
                }
              }
            }
          }
        ]
      },
      {
        title: "Para tu perro a domicilio",
        blocks: [
          {
            size: 3,
            data: {
              icon:
                "https://kypper-dev.s3.amazonaws.com/svg/super-app-icons/veterinario.png",
              text: "Veterinario",
              image:
                "https://s3.amazonaws.com/kypper-dev/MainViewServices/VeterinarioPerros.png",
              aspectRatio: 0.67,
              nav: "veterinary",
              entity: {
                type: "service",
                properties: {
                  id: 201,
                  name: "Veterinario",
                  price: 26000,
                  image:
                    "https://s3.amazonaws.com/kypper-dev/MainViewServices/VeterinarioPerros.png",
                  shortDescription: "",
                  description: "",
                  iconName: null
                }
              }
            }
          },
          {
            size: 3,
            data: {
              icon:
                "https://kypper-dev.s3.amazonaws.com/svg/super-app-icons/bano.png",
              text: "Baño de peludos",
              image:
                "https://s3.amazonaws.com/kypper-dev/MainViewServices/BañoPeludos.png",
              aspectRatio: 0.67,
              nav: "shower",
              entity: {
                type: "service",
                properties: {
                  id: 202,
                  name: "Baño de peludos",
                  price: 22000,
                  image:
                    "https://s3.amazonaws.com/kypper-dev/MainViewServices/BañoPeludos.png",
                  shortDescription: "",
                  description: "",
                  iconName: null
                }
              }
            }
          }
        ]
      },
      {
        title: "Para tu gato a domicilio",
        blocks: [
          {
            size: 3,
            data: {
              icon:
                "https://kypper-dev.s3.amazonaws.com/svg/super-app-icons/veterinario.png",
              text: "Veterinario",
              image:
                "https://s3.amazonaws.com/kypper-dev/MainViewServices/Veterinarios.png",
              aspectRatio: 0.67,
              nav: "veterinary",
              entity: {
                type: "service",
                properties: {
                  id: 203,
                  name: "Veterinario",
                  price: 26000,
                  image:
                    "https://s3.amazonaws.com/kypper-dev/MainViewServices/Veterinarios.png",
                  shortDescription: "",
                  description: "",
                  iconName: null
                }
              }
            }
          },
          {
            size: 3,
            data: {
              icon:
                "https://kypper-dev.s3.amazonaws.com/svg/super-app-icons/bano.png",
              text: "Baño de bigotes",
              image:
                "https://s3.amazonaws.com/kypper-dev/MainViewServices/BañoBigotes.png",
              aspectRatio: 0.67,
              nav: "shower",
              entity: {
                type: "service",
                properties: {
                  id: 204,
                  name: "Baño de bigotes",
                  price: 28000,
                  image:
                    "https://s3.amazonaws.com/kypper-dev/MainViewServices/BañoBigotes.png",
                  shortDescription: "",
                  description: "",
                  iconName: null
                }
              }
            }
          }
        ]
      }
    ]
  };

  const buf = Buffer.from(JSON.stringify(obj));
  console.log("Rrsults", buf);
  return (
    <div className="App">
      <h1>Example JSON a Buffer</h1>
      <h2>Open console!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
