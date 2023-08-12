import { Alert } from "react-native";
import { supabase } from "../lib/supabase"

export default class StoragePicture {

// Upload file using standard upload


    static async uploadFile(file) {
        
        const { data, error } = await supabase.storage.from('captures').upload(new Date().toLocaleString(), file)
        
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