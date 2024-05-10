import React from 'react';

const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

const RegionFilter = ({ region, onFilter }) => {
  return (
    <select
      name="region-filter"
      className="bg-elementColor pl-4 border-r-[1rem] border-elementColor pr-4 rounded-md shadow-md outline-none dropdown block py-3 mt-6 sm:mt-0 sm:py-0"
      defaultValue={region ? region : 'default'}
      onChange={e => onFilter(e.target.value)}>
      <option value="default" disabled hidden>
        Select Region
      </option>
      <option value="">Default</option>
      {regions.map((region, i) => (
        <option key={i} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
};

export default RegionFilter;
