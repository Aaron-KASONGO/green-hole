import { Alert } from "react-native";
import { supabase } from "../../lib/supabase";

export default class DemandeMenage{

    static getMenage() {
        return supabase.from('Menage')
    }


    static async getAllDemandeMenage(email) {
        
        let { data, error } = await this.getMenage()
            .select('nom, prenom, latitude, longitude, adresse, description, image, email, Souscription(id, created_at, Demande(id, created_at, titre, description, date_planification))')
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

    static async getDemandeEnCours(email) {
        
        let { data, error } = await this.getMenage()
            .select('nom, prenom, latitude, longitude, adresse, description, image, email, Souscription(id, created_at, Demande(id, created_at, titre, description, date_planification, Validation(id)))')
            .eq('email', email)
            .is('Souscription.Demande.Validation.id', null)
        
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