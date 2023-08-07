import React from 'react'
import { supabase } from '../lib/supabase'

export const Auth = () => {

    async function signUpMenageWithEmail({prenom, nom, adresse, email, description, password}) {
        const { error } = await supabase.auth.signUp({
          email: email,
          password: password,
        })
    
        if (error) {
            return error;
        } else {
            const { data, error } = await supabase
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
        }
    }

    async function signUpCollecteurWithEmail({mark, prenom, nom, adresse, email, description, password}) {
        const { error } = await supabase.auth.signUp({
          email: data.email,
          password: data.password,
        })
    
        if (error) {
            return error;
        } else {
            const { data, error } = await supabase
                .from('Menage')
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
        }
    }

    return (
        <>
        </>
    )
}
