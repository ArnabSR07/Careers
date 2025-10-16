import React from 'react'
import { assets } from '../assets/assets'

const WhoWeAre = () => {
  return (
    <div className='grid grid-cols-2 '>
        <div className='w-full h-[738px] relative'>
            <div className='h-full w-[80%]' style={{
              backgroundImage:`url(${assets.dimmedbg})`,
              backgroundSize:"cover",
              backgroundPosition:"center",
              
            }}>

              <div className='w-[500px] h-[80%] opacity-100 p-5 absolute left-1/3 top-1/4'>
                 <img className='' src={assets.shortImg} alt="" />
              </div>

            </div>
        </div>
        <div className='py-12 px-8'>
           
            <h2 className='text-3xl mb-10'>WHO <span className='font-bold'> WE  ARE</span></h2>

            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas repellat facere optio obcaecati tenetur aliquam. Quam accusantium suscipit facere expedita velit rerum minus quo animi totam repellat! Laboriosam, itaque fugiat aliquid dolores similique nulla molestiae quam quasi! Cum, ullam. Hic dolores quos blanditiis enim temporibus ea nisi ipsum dolorum. Minus nostrum nisi quisquam cum repudiandae nesciunt tempore totam? Praesentium voluptatibus blanditiis corporis error consequatur, reiciendis odio alias illo quaerat quo eos! Quam mollitia maxime reiciendis incidunt! Praesentium, cum explicabo! Nihil sequi consequuntur repellat esse non iusto obcaecati officia iste, molestiae numquam facere quae voluptatibus ipsum quas repudiandae, explicabo culpa aspernatur. Dolorum quasi, repudiandae similique consequatur illo dolores accusantium cupiditate laboriosam ratione dolorem, a officia delectus iste? Rerum officiis adipisci quidem, minima officia facere harum, voluptatibus velit illum soluta pariatur nostrum. Assumenda provident beatae facere, deserunt illo vitae sint earum, nesciunt nemo perspiciatis ipsum impedit asperiores excepturi odio totam error eaque! Nam beatae accusantium expedita impedit natus reprehenderit commodi velit, voluptates repudiandae vel quis? Quo, mollitia perspiciatis sapiente explicabo dolore sit quod exercitationem corrupti iusto velit quae maiores laborum inventore eaque eveniet harum, quidem ipsa, quisquam ab corporis a veritatis quasi. Assumenda, magnam ipsum! Illo exercitationem magni voluptates recusandae facere modi.
        </div>
    </div>
  )
}

export default WhoWeAre