import axios from "axios";
import { useState, useEffect } from "react";


export function useGroups() {
    const [groups, setGroups] = useState([]);
    const [filters, setFilters] = useState([])
    const [initialGroups, setInitialGroups] = useState([]);

    useEffect(() => {
        async function fetchGroups() {
            const response = await fetch("http://localhost:8080/api/groups");
            const data = await response.json();


            const categories = (await axios.get("http://localhost:8080/api/category")).data;
            setGroups(data);
            setInitialGroups(data);
            setFilters(categories);
        }
        fetchGroups();
    }, []);


    function handleClick(group_id) {
        window.location.href = `/Group?id=${group_id}`;
    }

    function toggleFilter(filterId) {
        const newFilters = filters.map(f => {
            if (f.cat_id == filterId) {
                return { ...f, checked: !f.checked };
            }
            return f;
        });
        setFilters(newFilters);
    }

    useEffect(() => {
        const filteredGroups = initialGroups.filter(group => {
            return filters.filter(f => !f.checked).map(f => f.cat_id).includes(group.category.cat_id);
        });
        setGroups(filteredGroups);
    }, [filters]);

    return { filters, toggleFilter, groups, handleClick }
}