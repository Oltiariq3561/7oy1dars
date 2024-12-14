import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [rate, setRate] = useState('');
  const [balance, setBalance] = useState('');
  const [deposit, setDeposit] = useState('');
  const [status, setStatus] = useState('Active');
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function handleAddTaskClick() {
    setShowModal(true);
  }

  function handleSaveTask(e) {
    e.preventDefault();
    if (name.length >= 5) {
      const user = {
        id: Date.now(),
        name:name,
        desc:desc,
        rate:rate,
        balance:balance,
        deposit:deposit,
        status:status,
      };

      setData([...data, user]);
      setName('');
      setDesc('');
      setRate('');
      setBalance('');
      setDeposit('');
      setStatus('Active');
      setShowModal(false);
    } else {
      alert("5ta dan koproq belgi bolsin yozing");
    }
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  function handleDelete(id) {
    setData(data.filter((item) => item.id !== id));
  }

  return (
    <div>
      <div className="container m-auto bg-[#F4F7FC] border min-h-[125px] rounded-md w-[1200px]">
        <div className='flex w-[1050px] ml-20 justify-between'>
          <input className='mt-[20px] w-[300px] rounded-sm text-black bg-[#dae1ec]' placeholder='Search' type="text" name="" id="" />
          <button
            type="button"
            onClick={handleAddTaskClick}
            className='border text-white text-[17px] mt-[20px] bg-[#0a65ff] w-[148px] h-[40px] rounded-md'>
            + Add Customer
          </button>
        </div>

        <div className="flex w-[1030px] m-auto mt-10 h-[45px]">
          <div className="w-[150px] mr-[20px] text-start">NAME</div>
          <div className="w-[150px] mr-[20px] text-start">DESCRIPTION</div>
          <div className="w-[100px] mr-[70px] text-end">RATE</div>
          <div className="w-[100px] mr-[45px] text-end">BALANCE</div>
          <div className="w-[100px] mr-[45px] text-end">DEPOSIT</div>
          <div className="w-[100px] text-end">STATUS</div>
        </div>

        {data.length > 0 && data.map((v) => (
          <div className='bg-gray-50 w-[1200px]' key={v.id}>
            <div
              className="bg-gray-50 w-[1030px] h-[60px] text-left m-auto rounded-md flex mt-2 justify-between items-center">
              <div className="">{v.name}</div>
              <div className="pr-[85px]">{v.desc}</div>
              <div className="">{v.rate}</div>
              <div className="">{v.balance}</div>
              <div className="">{v.deposit}</div>
              <div className="">{v.status}</div>
              <button onClick={() => handleDelete(v.id)} >
                🗑
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-[400px]">
            <h2 className="text-[20px] font-semibold mb-4">Add a Task</h2>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border w-full h-[40px] rounded-md p-2 mb-2"
              placeholder="Name"
            />
            <input
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="border w-full h-[40px] rounded-md p-2 mb-2"
              placeholder="Description"
            />
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="border w-full h-[40px] rounded-md p-2 mb-2"
              placeholder="Rate"
            />
            <input
              type="number"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
              className="border w-full h-[40px] rounded-md p-2 mb-2"
              placeholder="Balance"
            />
            <input
              type="number"
              value={deposit}
              onChange={(e) => setDeposit(e.target.value)}
              className="border w-full h-[40px] rounded-md p-2 mb-2"
              placeholder="Deposit"
            />
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border w-full h-[40px] rounded-md p-2 mb-4">
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>

            <div className="flex justify-end gap-4">
              <button
                onClick={handleCloseModal}
                className="border text-white bg-gray-500 px-4 py-2 rounded-md">
                Cancel
              </button>
              <button
                onClick={handleSaveTask}
                className="border text-white bg-lime-700 px-4 py-2 rounded-md">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
