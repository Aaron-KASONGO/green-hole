import { supabase } from "../lib/supabase";

export default class Auth {
    static async signUpMenageWithEmail({prenom, nom, adresse, email, description, password}) {
        const { error } = await supabase.auth.signUp({
          email: email,
          password: password,
        })
    
        if (error !== undefined) {
            return {error};
        } else {
            const { data, errorData } = await supabase
                .from('Menage')
                .insert([
                    {
                        nom: nom,
                        prenom: prenom,
                        adresse: adresse,
                        description: description,
                        email: email
                    },
                ])
                .select()
            if (errorData !== undefined) return {errorData}
        }
    }

    static signUpCollecteurWithEmail({mark, prenom, nom, adresse, email, description, password}) {
        supabase.auth.signUp({
          email: email,
          password: password,
        }).then((resonse) =>{
            supabase
                .from('Collecteur')
                .insert([
                    {
                        nom_mark: mark,
                        nom: nom,
                        prenom: prenom,
                        adresse: adresse,
                        description: description,
                        email: email
                    },
                ])
                .select()
        }).catch((error) => error)
    }
}