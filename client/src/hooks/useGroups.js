import { useState, useEffect } from "react";


export function useGroups() {
    const [groups, setGroups] = useState([]);
    const [filters, setFilters] = useState([
        {
            "cat_id": 1,
            "name": "Physical",
            "checked": true
        },
        {
            "cat_id": 2,
            "name": "Leisure",
            "checked": true
        },
        {
            "cat_id": 3,
            "name": "Arts and Crafts",
            "checked": true
        },
        {
            "cat_id": 4,
            "name": "Games",
            "checked": true
        },
        {
            "cat_id": 5,
            "name": "Nature",
            "checked": true
        }
    ])
    const [initialGroups, setInitialGroups] = useState([]);

    useEffect(() => {
        async function fetchGroups() {
            const response = await fetch("http://localhost:8080/api/groups");
            const data = await response.json();
            setGroups(data);
            setInitialGroups(data);
        }
        fetchGroups();
    }, []);


    function handleClick(group_id) {
        console.log(group_id);

        window.location.href = `/Group?id=${group_id}`;
    }

    function toggleFilter(filter) {
        setFilters(filters.map(f => {
            if (f.id === filter.id) {
                return {
                    ...f,
                    checked: !f.checked
                }
            } else {
                return f;
            }
        }));
    }

    useEffect(() => {
        const filteredGroups = initialGroups.filter(group => {
            return filters.filter(f => f.checked).map(f => f.cat_id).includes(group.category.cat_id);
        });
        setGroups(filteredGroups);
    }, [filters]);

    return { filters, toggleFilter, groups, handleClick }
}