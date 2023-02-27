import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Form = () => {
    const [checked, setChecked] = useState(false);
    const [nameChanged, setNameChanged] = useState('');
    const [selectOption, setSelectOption] = useState('Manufacturing');
    const [sectors, setSevtors] = useState({});
    const [details, setDetails] = useState([]);
    const [edit, setEdit] = useState({});
    const [updateCheck, setUpdateCheck] = useState(false);

    const handleOption = (e) => {
        setSelectOption(e.target.value);

    }
    let addSectore = {};
    const checkedValue = (e) => {
        setChecked(e.target.checked);
        //console.log(e.target.value);
        //console.log(checked);
    }
    const nameChange = (e) => {
        setNameChanged(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const a = {
            name: nameChanged,
            check: checked,
            option: selectOption
        }
        addSectore = { ...a };
        console.log(addSectore);
        //nameChanged = '';
        setSevtors({});
        if (updateCheck) {
            
        }
        setNameChanged('');
        setChecked(checked === false);
        setSelectOption('Manufacturing')
        fetch('https://trask-server-production.up.railway.app/sectorcollection', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(addSectore)
        })
            .then(res => res.json())
            .then(data => setSevtors(data))
        //console.log(checked);
        //console.log(nameChanged);
    }

    useEffect(() => {
        fetch('https://trask-server-production.up.railway.app/sectorcollection')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [sectors])

    useEffect(() => {
        fetch('https://trask-server-production.up.railway.app/sectorcollection')
            .then(res => res.json())
            .then(data => setSevtors(data))
    }, [sectors, checked,updateCheck])

    const handleDelete = (id) => {
        console.log(id);
        const proceed = window.confirm('Are you want to delete?');
        if (proceed) {
            const uri = `https://trask-server-production.up.railway.app/sectorcollection/${id}`;
            fetch(uri, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const a = sectors.filter(sector => sector.id !== id);
                        console.log(a);
                        setSevtors(a);
                    }
                })
        }
    }

    return (
        <div className='lg:flex lg:justify-center lg:items-center sm:m-8'>
            <div className='shadow-lg p-4'>
                <h1 className=''>Please enter your name and pick the Sectors you are currently involved in.</h1>
                <form onSubmit={handleSubmit} class="w-full max-w-sm">
                    <div class="md:flex md:items-center mb-6">
                        <div class="">
                            <label class="text-black md:text-right pr-4" for="inline-full-name">
                                Name:
                            </label>
                        </div>
                        <div class="">
                            <input onChange={nameChange} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded md:w-full sm:flex sm:justify-center sm:items-center py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" name='fullName' type="text" defaultValue={edit.name} required />
                        </div>
                    </div>

                    <label for="countries" class=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                    <select onChange={handleOption} name='option'defaultValue={edit.option||'Select'} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="Construction materials">&nbsp;&nbsp;&nbsp;&nbsp;Construction materials</option>
                        <option value="Electronics and Optics">&nbsp;&nbsp;&nbsp;&nbsp;Electronics and Optics</option>
                        <option value="Food and Beverage">&nbsp;&nbsp;&nbsp;&nbsp;Food and Beverage</option>
                        <option value="Bakery &amp; confectionery products">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bakery &amp; confectionery products</option>
                        <option value="Beverages">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Beverages</option>
                        <option value="Fish & fish products">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fish &amp; fish products </option>
                        <option value="Meat & meat products">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meat &amp; meat products</option>
                        <option value="Milk & dairy products">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Milk &amp; dairy products </option>
                        <option value="Other">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other</option>
                        <option value="Sweets & snack food">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sweets &amp; snack food</option>
                        <option value="Furniture">&nbsp;&nbsp;&nbsp;&nbsp;Furniture</option>
                        <option value="Bathroom/sauna">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bathroom/sauna </option>
                        <option value="Bedroom">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bedroom</option>
                        <option value="Children’s room">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Children’s room </option>
                        <option value="Kitchen">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kitchen </option>
                        <option value="Living room">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Living room </option>
                        <option value="Office">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Office</option>
                        <option value="Other (Furniture)">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other (Furniture)</option>
                        <option value="Outdoor">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Outdoor </option>
                        <option value="Project furniture">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Project furniture</option>
                        <option value="Machinery">&nbsp;&nbsp;&nbsp;&nbsp;Machinery</option>
                        <option value="Machinery components">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machinery components</option>
                        <option value="Machinery equipment/tools">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machinery equipment/tools</option>
                        <option value="Manufacture of machinery">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Manufacture of machinery </option>
                        <option value="Maritime">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maritime</option>
                        <option value="Aluminium and steel workboats">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aluminium and steel workboats </option>
                        <option value="Boat/Yacht building">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Boat/Yacht building</option>
                        <option value="Ship repair and conversion">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ship repair and conversion</option>
                        <option value="Metal structures">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal structures</option>
                        <option value="Other">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other</option>
                        <option value="Repair and maintenance service">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Repair and maintenance service</option>
                        <option value="Metalworking">&nbsp;&nbsp;&nbsp;&nbsp;Metalworking</option>
                        <option value="Construction of metal structures">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Construction of metal structures</option>
                        <option value="Houses and buildings">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Houses and buildings</option>
                        <option value="267">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal products</option>
                        <option value="Metal works">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal works</option>
                        <option value="CNC-machining">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CNC-machining</option>
                        <option value="Forgings, Fasteners">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forgings, Fasteners </option>
                        <option value="Gas, Plasma, Laser cutting">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gas, Plasma, Laser cutting</option>
                        <option value="MIG, TIG, Aluminum welding">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MIG, TIG, Aluminum welding</option>
                        <option value="Plastic and Rubber">&nbsp;&nbsp;&nbsp;&nbsp;Plastic and Rubber</option>
                        <option value="Packaging">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Packaging</option>
                        <option value="Plastic goods">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic goods</option>
                        <option value="Plastic processing technology">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic processing technology</option>
                        <option value="Blowing">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blowing</option>
                        <option value="Moulding">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Moulding</option>
                        <option value="Plastics welding and processing">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastics welding and processing</option>
                        <option value="Plastic profiles">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic profiles</option>
                        <option value="Printing">&nbsp;&nbsp;&nbsp;&nbsp;Printing </option>
                        <option value="Advertising">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Advertising</option>
                        <option value="Book/Periodicals printing">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Book/Periodicals printing</option>
                        <option value="Labelling and packaging printing">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Labelling and packaging printing</option>
                        <option value="Textile and Clothing">&nbsp;&nbsp;&nbsp;&nbsp;Textile and Clothing</option>
                        <option value="44">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clothing</option>
                        <option value="Textile">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Textile</option>
                        <option value="Wood">&nbsp;&nbsp;&nbsp;&nbsp;Wood</option>
                        <option value="Other (Wood)">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other (Wood)</option>
                        <option value="Wooden building materials">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wooden building materials</option>
                        <option value="Wooden houses">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wooden houses</option>
                        <option value="Other">Other</option>
                        <option value="Creative industries">&nbsp;&nbsp;&nbsp;&nbsp;Creative industries</option>
                        <option value="Energy technology">&nbsp;&nbsp;&nbsp;&nbsp;Energy technology</option>
                        <option value="Environment">&nbsp;&nbsp;&nbsp;&nbsp;Environment</option>
                        <option value="Service">Service</option>
                        <option value="Business services">&nbsp;&nbsp;&nbsp;&nbsp;Business services</option>
                        <option value="Engineering">&nbsp;&nbsp;&nbsp;&nbsp;Engineering</option>
                        <option value="Information Technology and Telecommunications">&nbsp;&nbsp;&nbsp;&nbsp;Information Technology and Telecommunications</option>
                        <option value="Data processing, Web portals, E-marketing">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data processing, Web portals, E-marketing</option>
                        <option value="Programming, Consultancy">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Programming, Consultancy</option>
                        <option value="Software, Hardware">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Software, Hardware</option>
                        <option value="Telecommunications">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Telecommunications</option>
                        <option value="Tourism">&nbsp;&nbsp;&nbsp;&nbsp;Tourism</option>
                        <option value="Translation services">&nbsp;&nbsp;&nbsp;&nbsp;Translation services</option>
                        <option value="Transport and Logistics">&nbsp;&nbsp;&nbsp;&nbsp;Transport and Logistics</option>
                        <option value="Air">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Air</option>
                        <option value="Rail">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rail</option>
                        <option value="Road">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Road</option>
                        <option value="Water">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Water</option>
                    </select>
                    {
                        checked == false ?
                            <div class="flex items-center">
                                <input onChange={(e) => checkedValue(e)} type="checkbox" value="2" name="valuecheck" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="link-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Agree</label>
                            </div> :
                            <div class="flex items-center">
                                <input checked onChange={(e) => checkedValue(e)} type="checkbox" value="2" name="valuecheck" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label for="link-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Agree</label>
                            </div>
                    }

                    {
                        checked === true ?
                            <button type='submit' class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                               {updateCheck==true? "Update":'Submit'}
                            </button> :
                            <button disabled class="bg-gray-500 text-white font-bold py-2 px-4 rounded cursor-not-allowed">
                                Submit
                            </button>
                    }
                </form>
                <div class="relative overflow-x-auto">

                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 text-center dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Sectors
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Terms of aggrements
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Action
                                </th>

                            </tr>
                        </thead>
                        {
                            details.map(singleData => {

                                return <tbody>

                                    <tr class="bg-white text-black dark:bg-gray-800 text-center">
                                        <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-black">
                                            {singleData?.name}
                                        </th>
                                        <td class="px-6 py-4 ">
                                            {singleData.option}
                                        </td>
                                        <td class="px-6 py-4 ">
                                            {String(singleData.check)}
                                        </td>
                                        <td class="px-6 py-4 ">
                                            <Link to={`/update/${singleData._id}`}>
                                            <button class="rounded-none bg-black text-white pl-6 pr-6 pt-2 pb-2">Edit</button>
                                        </Link>
                                            <button onClick={() => handleDelete(singleData._id)} class="rounded-none bg-red-700 text-white pl-6 pr-6 pt-2 pb-2 ml-2 mt-2">Delete</button>
                                        </td>
                                    </tr>

                                </tbody>
                            })}
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Form;