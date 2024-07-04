import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type localStorageKeys = {
    token?: string;
};

const getStorage = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value !== null ? JSON.parse(value) : undefined;
    } catch (error) {
        console.error(`Error reading from AsyncStorage for key ${key}:`, error);
    }
};

const setStorage = async (key: string, value: any) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error(`Error saving to AsyncStorage for key ${key}:`, error);
    }
};

export const removeStorage = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.error(`Error removing from AsyncStorage for key ${key}:`, error);
    }
}

const usePersistentState = (key: keyof localStorageKeys) => {
    const [store, setStore] = useState<any>(null);

    useEffect(() => {
        getStorage(key).then((data) => {
            setStore(data);
        });
    }, [key]);

    const set = (value: any) => {
        setStorage(key, value);
        setStore(value);
    };



    return {
        store,
        set,
        removeStorage
    };
};

export default usePersistentState;
