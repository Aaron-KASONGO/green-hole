import { Alert } from "react-native";
import { supabase } from "../lib/supabase";

export default class Demande{

    static getCollecteur() {
        return supabase.from('Collecteur')
    }

    static async getUserType(email) {
        
        const { data, error } = await supabase
            .from('Collecteur')
            .select('*')
            .eq('email', email)
        if (error) {
            return {collecteur: false};
        }
        
        if (data.length !== 0) {
            return {collecteur: true};
        } else {
            return {collecteur: false};
        }
    }

    static async getDemandeExp(email) {
        
        let { data, error } = await this.getCollecteur()
            .select('nom_mark, nom, prenom, latitude, longitude, adresse, description, image, email, Souscription(id, created_at, Demande(id, created_at, titre, description, date_planification))')
            .eq('email', email)
            .gte('Souscription.Demande.date_planification', new Date().toUTCString() )
        
        if (error) {
            Alert.alert(error.message);
        }
        
        if (data.length !== 0) {
            return data;
        } else {
            return data;
        }

    }

    static async getDemandeNotValid(email) {
        
        let { data, error } = await supabase
            .from('Demande')
            .select('titre, description, date_planification, Souscription(id, created_at, Collecteur(id, email)), Validation(id)')
            .eq('Souscription.Collecteur.email', email)
            .is('Validation.id', null)
        if (error) {
            Alert.alert(error.message);
        }
        
        if (data.length !== 0) {
            return data;
        } else {
            return data;
        }

    }

    static async getDemandeValid(email) {
        
        let { data, error } = await supabase
            .from('Demande')
            .select('titre, description, date_planification, Souscription(id, created_at, Collecteur(id, email)), Validation(id)')
            .eq('Souscription.Collecteur.email', email)
            .lte('date_planification', new Date().toUTCString() )
        
        if (error) {
            Alert.alert(error.message);
        }
        
        if (data.length !== 0) {
            return data;
        } else {
            return data;
        }

    }

    static async getDemandeValidFix(email) {
        
        let { data, error } = await supabase
            .from('Demande')
            .select('titre, description, date_planification, Souscription(id, created_at, Collecteur(id, email)), Validation(id)')
            .eq('Souscription.Collecteur.email', email)
        
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