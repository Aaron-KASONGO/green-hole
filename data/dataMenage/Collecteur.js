import { Alert } from "react-native";
import { supabase } from "../../lib/supabase";

export default class CollecteurMenage{

    static async getCollecteurs(email) {
        
        let { data, error } = await supabase
            .from('Menage')
            .select('nom, prenom, latitude, longitude, adresse, description, image, email, Souscription(id, created_at,note, Collecteur(id, prenom, nom, image, email, description, Souscription(id, note)), Demande(id))')
            .eq('email', email)
        
        if (error) {
            Alert.alert(error.message);
        }
        
        if (data.length !== 0) {
            return data;
        } else {
            return data;
        }
    }

    static async getAllCollecteurs(email) {
        
        let { data, error } = await supabase
            .from('Collecteur')
            .select('id,nom_mark, nom, prenom, latitude, longitude, adresse, description, image, email, Souscription(id, created_at,note, note, Demande(id), Menage(id, email)))')
            //.not('Souscription.Menage.email', 'ov', `(${email})`)   
        if (error) {
            Alert.alert(error.message);
        }
        
        if (data.length !== 0) {
            return data;
        } else {
            return data;
        }
    }

    static async getUserId(email) {
        
        let { data, error } = await supabase
            .from('Menage')
            .select('id, prenom, nom, email')
            .eq('email', email)
            .single()
        if (error) {
            Alert.alert(error.message);
        }
        
        if (data.length !== 0) {
            return data;
        } else {
            return data;
        }
    }

    static async addAbonne(idUser, idCollecter) {

        const { data, error } = await supabase
            .from('Souscription')
            .insert([
            { collecteur: idCollecter, menage: idUser },
            ])
            .select()
      

        if (error) {
            Alert.alert(error.message);
        }
        
        if (data.length !== 0) {
            return data;
        } else {
            return data;
        }
    }

    static async getMenage(email) {

        let { data, error } = await supabase
            .from('Menage')
            .select('*')
            .eq('email', email)
            .single()
      

        if (error) {
            Alert.alert(error.message);
        }
        
        if (data.length !== 0) {
            return data;
        } else {
            return data;
        }
    }

}