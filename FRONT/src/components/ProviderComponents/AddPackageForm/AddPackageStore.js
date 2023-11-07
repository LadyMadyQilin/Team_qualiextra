import { create } from "zustand";
import axios from "axios";
import { UseSignInStore } from "../../AuthLogin/signInStore";

const AddPackageFormStore = create((set, get) => {
  return {
    data: {
      price: 100,
      quantity: 5,
      // date_start: "",
      // date_end: "",
      // available: "",
      // hour_start: "",
      // hour_end: "",
      // join_catg: "",
      // capacity:""
    },
    services: [],

    handleChange: (event) => {
      const { name, value } = event.target;
      console.log(name, value);

      set((state) => {
        const { data } = state;
        console.log(data);
        data[name] = value;

        return {
          ...state,
          data: data,
        };
      });
    },
    postPackage: async () => {
      console.log(get().data);
      const response = await axios.post(
        "http://localhost:3000/packages",
        get().data
      );
      window.alert(response.data);
      console.log(response.data);
    },
    //! demander a tom la direction a prendre pour reecuperer l'id de l'instituion via l'objet user ou autre
    getServices: async () => {
      const institutionId = UseSignInStore.getState().user.institutions.id;
      try {
        const response = await axios.get(
          `http://localhost:3000/institutions/${institutionId}/services`
        );
        set({ institutions: response.data });
        console.log(response.data);
      } catch (err) {
        set({
          error:
            "Une erreur est survenue lors de la récuperation des institutions",
        });
      }
    },
  };
});

export default AddPackageFormStore;
