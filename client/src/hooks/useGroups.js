import { useState, useEffect } from "react";


export function useGroups() {
    const [groups, setGroups] = useState(temporaryGroups);
    const [filters, setFilters] = useState([
        {
            name: "Physical",
            value: "physical",
            checked: true
        },
        {
            name: "Leisure",
            value: "leisure",
            checked: true
        },
        {
            name: "Arts and Crafts",
            value: "art",
            checked: true
        },
        {
            name: "Games",
            value: "games",
            checked: true
        },
        {
            name: "Nature",
            value: "nature",
            checked: true
        }
    ])
    const [initialGroups, setInitialGroups] = useState(temporaryGroups);


    function handleClick(group_id) {
        console.log(group_id);

        window.location.href = `/Group?id=${group_id}`;
    }

    function toggleFilter(filter) {
        setFilters(filters.map(f => {
            if (f.value === filter) {
                return {
                    ...f,
                    checked: !f.checked
                }
            }
            return f;
        }));
    }

    useEffect(() => {
        const filteredGroups = initialGroups.filter(group => {
            return filters.filter(f => f.checked).map(f => f.name).includes(group.category);
        });
        setGroups(filteredGroups);
    }, [filters]);

    return { filters, toggleFilter, groups, handleClick }

}
const temporaryGroups = [
    {
        id: 1,
        name: "Group 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim convallis aenean et tortor. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Tristique senectus et netus et",
        size: "5",
        category: "Physical",
        imageUrl: '/physical.jpg'
    },
    {
        id: 2,
        name: "Group 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim convallis aenean et tortor. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Tristique senectus et netus et",
        size: "3",
        category: "Leisure",
        imageUrl: '/leisure.jpg'
    },
    {
        id: 3,
        name: "Group 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim convallis aenean et tortor. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Tristique senectus et netus et",
        size: "12",
        category: "Arts and Crafts",
        imageUrl: 'arts_and_crafts.jpg'
    },
    {
        id: 4,
        name: "Group 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim convallis aenean et tortor. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Tristique senectus et netus et",
        size: "5",
        category: "Games",
        imageUrl: 'games.jpg'
    },
    {
        id: 5,
        name: "Group 5",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim convallis aenean et tortor. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Tristique senectus et netus et",
        size: "3",
        category: "Nature",
        imageUrl: '/nature.jpg'
    }
]