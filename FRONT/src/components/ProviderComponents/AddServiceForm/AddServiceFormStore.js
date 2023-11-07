import { create } from "zustand";
import axios from "axios";
import { UseSignInStore } from "../../AuthLogin/signInStore";

const AddServiceFormStore = create((set, get) => {
    
    return ({

        data: {
            institutionId: "",
            //photoS: "",
            name_serv: "",
            description_serv: "",
        },
        institutions: [],
        error: null,
        

        handleChange: (event) => {
            const { name, value } = event.target;
            console.log(name, value)

            set((state) => {
                const { data } = state;
                console.log(data);
                data[name] = value;

                return {
                    ...state,
                    data: data
                }
            })
        },

        postService: async () => {
            console.log(get().data)
            const response = await axios.post('http://localhost:3000/services', get().data)
            window.alert(response.data);
            console.log(response.data);
        },
        getInstitutionsByProviderId: async () => {
            const userId = UseSignInStore.getState().user.id;
            try {
                const response = await axios.get(`http://localhost:3000/users_provider/${userId}/institutions`);
                set({ institutions: response.data });
                console.log(response.data)
            } catch (err) {
                set({error: 'Une erreur est survenue lors de la récuperation des institutions'});
            }
        }
    })
})

export default AddServiceFormStore;
