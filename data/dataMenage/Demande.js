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
        
        let { data, error } = await supabase
            .from('Demande')
            .select('titre, description, date_planification, Souscription!inner(id, created_at, Menage(id, email), Collecteur(id, created_at, email, nom_mark)), Validation(id)')
            .eq('Souscription.Menage.email', email)
            .is('Validation.id', null)
            .gte('date_planification', new Date().toUTCString())
        
        if (error) {
            Alert.alert(error.message);
        }
        
        if (data.length !== 0) {
            return data;
        } else {
            return data;
        }

    }

    static async addingDemande(id, date) {
        
        
        const { data, error } = await supabase
            .from('Demande')
            .insert([
            { titre: 'Besoin de collecte de déchets', date_planification: date, souscription: id },
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

    static async updateNote(id, note) {
        
        const { data, error } = await supabase
            .from('Souscription')
            .update({ note: note })
            .eq('id', id)
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

    static async removeSouscription(id) {
        
        
        const { error } = await supabase
            .from('Souscription')
            .delete()
            .eq('id', id)


        
        if (error) {
            Alert.alert(error.message);
        }
    }

}