import React, { useState} from 'react';
import {View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen =() =>{
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const sortResultsByPrice= (price) => {
        // price '$'||'$$'||'$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };

    return(
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList
                    title="Cost Effective"
                    results={sortResultsByPrice('$')}
                />
                <ResultsList
                    title="Bit Pricier"
                    results={sortResultsByPrice('$$')}
                />
                <ResultsList
                    title="Big Spender"
                    results={sortResultsByPrice('$$$')}
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
