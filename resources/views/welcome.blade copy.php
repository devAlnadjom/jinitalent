<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <title >JiniTalent - Find your talented genius with us.</title>
        <meta name="description" content="At JiniTalent we specialize in the recruitment and placement of qualified technical personnel"/>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">
        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap">

        <!-- Scripts -->

        @vite('resources/js/app.js')
        <script defer src="https://unpkg.com/alpinejs@3.10.3/dist/cdn.min.js"></script>
    </head>
    <body x-data="jinitalent" x-init="hideloader" class="font-sans antialiased">
        <div class="preloader loaded-success  fixed inset-0 z-50 bg-gray-50 " x-show="showloader">
            <div class="absolute left-1/2 top-1/2 transform -translate-y-1/2">
              <div class="relative mx-auto my-12">
                <div class="inline-block">
                  <svg class="animate-spin h-8 w-8 text-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>


  <!-- ========== { HEADER }==========  -->
        <header class="fixed top-0 left-0 right-0 z-40">
            <nav class="main-nav bg-white">
            <div class="container xl:max-w-6xl mx-auto px-4 ">
                <div class="lg:flex lg:justify-between">
                    <div class="flex justify-between">
                        <div class="max-w-10 text-4xl font-bold capitalize text-gray-900 flex items-center">
                            <img class="h-20 " src="{{asset('img/logo.jpg')}}" title="logo" />
                            <!--span class="text-blue-800">jini</span> <span class="text-orange-600">Talent</span-->
                        </div>
                        <!-- mobile nav -->
                        <div class="flex flex-row items-center py-4 lg:py-0">
                            <div class="relative text-gray-900 hover:text-blue-900 block lg:hidden">
                            <button @click="toggle" type="button" class="menu-mobile block py-3 px-6 border-b-2 border-transparent">
                                <span class="sr-only">Mobile menu</span>
                                <svg x-show="!open" class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>

                                <svg x-show="open" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="close bi bi-x-lg h-8 w-8" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                                    <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                                </svg>
                            </button>
                            </div>
                        </div>

                    </div>

                <div class="flex flex-row">
                    <!-- nav menu -->
                    <ul class="navbar bg-white lg:bg-transparent w-full hidden text-center lg:text-left lg:flex lg:flex-row text-gray-900 text-sm items-center font-bold">
                        <li class="relative hover:text-blue-900 border-blue-900 hover:border-b-2 transition-all duration-200 ">
                            <a class="active block py-3 lg:py-7 px-6 border-b-2 border-transparent" href="#hero">Home</a>
                        </li>

                        <li class="relative hover:text-blue-900 border-blue-900 hover:border-b-2 transition-all duration-200">
                            <a class="block py-3 lg:py-7 px-6 border-b-2 border-transparent" href="#services">Headhunting/Consulting</a>
                        </li>
                        <!--li class="relative hover:text-blue-900 border-blue-900 hover:border-b-2 transition-all duration-200">
                            <a class="block py-3 lg:py-7 px-6 border-b-2 border-transparent" href="#whyus">Why Us?</a>
                        </li-->

                        <li class="relative hover:text-blue-900 border-blue-900 hover:border-b-2 transition-all duration-200">
                            <a class="block py-3 lg:py-7 px-6 border-b-2 border-transparent" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="flex flex-col w-full shadow-md md:hidden transition-all" x-show="open"
                    x-transition:enter="transition duration-500"
                    x-transition:enter-start="transform translate-x-full"
                    x-transition:enter-end="transform translate-x-0"
                    x-transition:leave="transition duration-500"
                    x-transition:leave-start="transform"
                    x-transition:leave-end="transform translate-x-full"
                >
                <!-- nav menu -->
                <ul class="navbar bg-white lg:bg-transparent w-full text-center text-gray-900 text-lg items-center font-bold">
                <li class="relative hover:text-blue-900 hover:bg-orange-100" @click="toggle">
                    <a class="active block py-3 lg:py-7 px-6 border-b-2 border-transparent" href="#hero">Home</a>
                </li>

                <li class="relative hover:text-blue-900 hover:bg-orange-100" @click="toggle">
                    <a class="block py-3 lg:py-7 px-6 border-b-2 border-transparent" href="#portfolio">Headhunting/Consulting</a>
                </li>
                <!--li class="relative hover:text-blue-900 hover:bg-orange-100" @click="toggle">
                    <a class="block py-3 lg:py-7 px-6 border-b-2 border-transparent" href="#whyus">Why Us?</a>
                </li-->

                <li class="relative hover:text-blue-900 hover:bg-orange-100" @click="toggle">
                    <a class="block py-3 lg:py-7 px-6 border-b-2 border-transparent" href="#contact">Contact</a>
                </li>
                </ul>
            </div>
            </nav>
        </header><!-- end header -->

        <main id="content">
            <!-- hero start -->
                <div id="hero" class="section relative z-0 py-28 md:pt-32 md:pb-20 bg-gray-50">
                  <div class="container xl:max-w-6xl mx-auto px-4">
                    <div class="flex flex-wrap flex-row -mx-4 justify-center">
                      <!-- content -->
                      <div class="flex-shrink max-w-full lg:h-96 bg-cover rounded-lg bg-center shadow-xl  -px-4 sm:px-12 -lg:px-10 w-full sm:w-9/12 lg:w-1/2  h-full -self-center" style="background-image: url({{asset('img/img3.jpeg')}})">
                        <!--img src="{{asset('img/img1.webp')}}" class="w-full max-w-full h-auto rounded-lg shadow-md" alt="creative agency"-->
                      </div><!-- end content -->

                      <!-- text -->
                      <div class="flex-shrink max-w-full px-4 w-full md:w-9/12 lg:w-1/2 self-center lg:pr-12">
                        <div class="text-center lg:text-left mt-6 lg:mt-0">
                          <div class="mb-12 lg:pl-10">
                            <h1 class="text-3xl leading-normal text-blue-900 font-bold mb-4">
                                At JiniTalent, We are specialized in the search for specifically qualified profiles
                            </h1>
                            <p class="text-gray-500 leading-relaxed font-light text-base mx-auto pb-2">On either a permanent or temporary basis. Our extensive search and technical recruiting experience gives our clients faster access to a larger selection of qualified candidates</p>
                            <!--p class="text-gray-800 leading-relaxed font-light text-base mx-auto pb-2">We are at your service.Our offices are open and our consultants are ready to help with your technical staffing needs during the COVID-19 pandemic. You can reach us quickly at 514-XXX-XXX.</p-->
                          </div>
                          <div class="lg:px-10">
                            <a class="py-2.5 px-10 inline-block text-center leading-normal text-gray-900 bg-white border-b border-gray-500 hover:text-blue-900 hover:ring-0 hover:bg-blue-100 focus:outline-none focus:ring-0 mr-4" href="#services">
                                <svg xmlns="http://www.w3.org/2000/svg" class="inline-block mr-1" width="1.5rem" height="1.5rem" fill="currentColor" viewBox="0 0 512 512"><path d="M304,384V360c0-29,31.54-56.43,52-76,28.84-27.57,44-64.61,44-108,0-80-63.73-144-144-144A143.6,143.6,0,0,0,112,176c0,41.84,15.81,81.39,44,108,20.35,19.21,52,46.7,52,76v24" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="224" y1="480" x2="288" y2="480" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="208" y1="432" x2="304" y2="432" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="256" y1="384" x2="256" y2="256" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M294,240s-21.51,16-38,16-38-16-38-16" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg>
                                Our Services
                            </a>

                            <a class="py-2.5 px-10 inline-block text-center leading-normal text-gray-100 bg-orange-600  border-b border-orange-800 hover:bg-orange-500 hover:text-white hover:ring-0 focus:outline-none focus:ring-0" href="{{route('public.uploadcv')}}"  title="Spontaneous Application">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block mr-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                  </svg>

                                Be a Jini
                            </a>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div><!-- end Hero -->


                 <!-- services Content -->
                 <div id="services" class="section relative z-0 bg-blue-50 py-20">
                    <div class="py-10">
                        <h2 class="text-center text-3xl font-bold">Our Services</h2>
                    </div>

                    <div class="flex  flex-row ">
                        <div class=" big-blue-900 md:w-2/5 md:min-h-96 px-10 py-10  lg:w-1/2 md:py-12 md:px-4 lg:px-8 lg:pl-32 md:pl-24 items-center">
                            <div class="w-16 p-2 bg-blue-200 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12  rounded-full">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                  </svg>

                            </div>
                            <h3 class=" text-3xl md:text-4xl font-bold text-slate-800">
                                Headhunting
                            </h3>
                            <div class="text-slate-400 text-lg mt-6 md:mt-10">
                                Including engineers, software developers, analysts, drafters, managers, technical writers, planners, designers, technologists, buyers, technicians and tradespersons, as well as senior management.
                            </div>
                        </div>
                        <div class="flex-1 big-blue-900 md:w-2/5 md:min-h-96 px-10 py-10  lg:w-1/2 md:py-12 md:px-4 lg:px-8 lg:pl-32 md:pl-24 items-center">
                            <div class="w-16 p-2 bg-blue-200 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12  rounded-full">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                  </svg>

                            </div>
                            <h3 class=" text-3xl md:text-4xl font-bold text-slate-800">
                                Headhunting
                            </h3>
                            <div class="text-slate-400 text-lg mt-6 md:mt-10">
                                Including engineers, software developers, analysts, drafters, managers, technical writers, planners, designers, technologists, buyers, technicians and tradespersons, as well as senior management.
                            </div>
                        </div>

                        <div class="flex-1 bg-cover  bg-center  w-full" style="baackground-image: url({{asset('img/img4.jpeg')}})">
                            <!--img src="{{asset('img/img1.webp')}}" class="w-full max-w-full h-auto rounded-lg shadow-md" alt="creative agency"-->
                            <div class="md:py-12  bg-opacity-10 h-full md:px-12 hover:bg-opacity-20 transition-all duration-300">

                            </div>

                          </div><!-- end content -->

                    </div>

                </div><!--  End Content -->
                <!-- Portfolio Content -->
                <div id="portfolio" class="section relative z-0 bg-slate-200">
                    <div class="flex -flex-wrap flex-row">
                        <div class=" bg-blue-900 md:w-2/5 md:min-h-96 px-10 py-20 lg:py-40 lg:w-1/2 md:py-12 md:px-4 lg:px-8 lg:pl-32 md:pl-24 items-center">
                            <h3 class=" text-3xl md:text-4xl font-bold text-white">
                                Over 500 CVs of experienced technical staff on file
                            </h3>
                            <div class="text-gray-50 text-lg mt-6 md:mt-10">
                                Including engineers, software developers, analysts, drafters, managers, technical writers, planners, designers, technologists, buyers, technicians and tradespersons, as well as senior management.
                            </div>
                        </div>

                        <div class="flex-1 bg-cover  bg-center  w-full" style="background-image: url({{asset('img/img4.jpeg')}})">
                            <!--img src="{{asset('img/img1.webp')}}" class="w-full max-w-full h-auto rounded-lg shadow-md" alt="creative agency"-->
                            <div class="md:py-12 bg-slate-900 bg-opacity-10 h-full md:px-12 hover:bg-opacity-20 transition-all duration-300">

                            </div>

                          </div><!-- end content -->

                    </div>

                </div><!--  End Content -->

                <div id="whyus" class="section relative z-0 bg-slate-600">
                    <div class="flex -flex-wrap flex-row">


                        <div class="flex-1 bg-cover  bg-center  w-full" style="background-image: url({{asset('img/img2.webp')}})">
                            <!--img src="{{asset('img/img1.webp')}}" class="w-full max-w-full h-auto rounded-lg shadow-md" alt="creative agency"-->
                            <div class="md:py-12 bg-slate-900 bg-opacity-10 h-full md:px-12 hover:bg-opacity-20 transition-all duration-300">

                            </div>

                        </div><!-- end content -->

                        <div class=" bg-orange-600 md:w-2/5 md:min-h-96 px-10 py-20 lg:py-40 lg:w-1/2 md:py-12 md:px-4 lg:px-8 lg:pr-26 md:pr-12 items-center">
                            <h3 class=" text-3xl md:text-4xl font-bold text-white">
                                No matter rarity or the complexity of the desired profile, we will find your candidate thanks to:
                            </h3>
                            <div class="text-gray-50 text-lg mt-6 md:mt-10  lg:ml-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <ul class="list-disc">
                                  <li class=" p-3 hover:border-l-white hover:border-l-4 rounded  hover:bg-black hover:bg-opacity-5 transition-all duration-300">A network of candidates and rich data bases</li>

                                  <li class=" p-3 mt-2 hover:border-l-white hover:border-l-4 rounded  hover:bg-black hover:bg-opacity-5 transition-all duration-300">
                                    Significant web and social media connections.
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <ul class="list-disc">
                                  <li class=" p-3 hover:border-l-white hover:border-l-4 rounded  hover:bg-black hover:bg-opacity-5 transition-all duration-300">
                                    Cutting-edge research tools and headhunting techniques
                                  </li>

                                  <li class=" p-3 mt-2 hover:border-l-white hover:border-l-4 rounded  hover:bg-black hover:bg-opacity-5 transition-all duration-300">
                                    Our knowledgeof the job market and its changes
                                  </li>
                                </ul>
                              </div>

                            </div>
                        </div>

                    </div>

                </div><!--  End Content -->


                <!-- contact start -->
                <div id="contact" class="section relative py-20 lg:py-36 bg-white dark:bg-gray-800">
                    <div class="mx-auto w-full md:w-3/5 px-10 ">
                        <p class="text-center text-xl md:text-2xl lg:text-3xl font-bold">
                            Recruiting qualified talent requires searching, targeting, approaching, meeting, evaluating, verifying, convincing, nurturing and continuing... and that's our job!
                        </p>
                        <!--p class="text-center text-lg mt-5 ">
                            Recruiting qualified talent requires searching, targeting, approaching, meeting, evaluating, verifying, convincing, nurturing and continuing... and that's our job!
                        </p-->

                        <p class="text-center text-lg mt-10  ">
                            <a class="mx-auto py-2.5 px-10 inline-block text-center leading-normal text-gray-100 bg-orange-600  border-b border-orange-800 hover:bg-orange-500 hover:text-white hover:ring-0 focus:outline-none focus:ring-0" href="mailto:info@jinitalent.com">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" class="inline-block mr-1" fill="currentColor" viewBox="0 0 512 512"><rect x="48" y="96" width="416" height="320" rx="40" ry="40" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><polyline points="112 160 256 272 400 160" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg>
                                Contact Us
                            </a>
                        </p>
                    </div>

                </div><!-- End contact -->

                <div id="whyus" class="section relative z-0 bg-slate-600">
                  <div class="flex -flex-wrap flex-col md:flex-row ">


                      <div class="flex-1 bg-cover  bg-center  w-full" style="background-image: url({{asset('img/img2.webp')}})">
                          <!--img src="{{asset('img/img1.webp')}}" class="w-full max-w-full h-auto rounded-lg shadow-md" alt="creative agency"-->
                          <div class="md:py-20 bg-slate-900 bg-opacity-40 h-full md:px-2 lg:px-10 hover:bg-opacity-50 transition-all duration-300 items-center">
                            <h3 class=" text-xl py-10 md:py-20 md:text-3xl lg:text-4xl px-6 font-bold text-white">
                              No matter rarity or the complexity of the desired profile, we will find your candidate.
                            </h3>
                            <div class=" hidden lg:block text-white text-2xl">
                                Have questions about service, please contact us.
                            </div>
                          </div>

                      </div><!-- end content -->

                      <div class=" bg-gray-200 md:w-3/5 .md:min-h-96 px-6 py-10  lg:w-1/2  md:px-4 lg:px-8 lg:pr-26 md:pr-12 items-center">

                          <div class="bg-gray-200 border-b border-gray-100 w-full p-6 wow fadeInUp" >
                            <!-- section header -->
                            <header class="text-center mx-auto mb-10 lg:px-20">
                              <p class="text-gray-600 leading-relaxed font-light text-xl mx-auto pb-2">Have questions about service, please contact us.</p>
                            </header><!-- end section header -->

                            <!-- contact form -->
                            @if ($errors->any())
                                <div class="p-2 text-sm bg-red-400 border border-red-600 text-red-800 my-2">
                                    <ul>
                                        @foreach ($errors->all() as $error)
                                            <li>{{ $error }}</li>
                                        @endforeach
                                    </ul>
                                </div>
                            @endif
                            @if (Session::has('message'))
                                <div class="p-2 text-sm bg-blue-200 border border-blue-600 text-blue-800 my-3 rounded">
                                    {{ Session::get('message') }}
                                </div>
                            @endif
                            <form action="{{ route('public.message')}}" method="post" >
                                @csrf
                                @honeypot
                              <div class="flex flex-wrap flex-row -mx-4">
                                <div class="flex-shrink w-full max-w-full md:w-1/2 px-4 mb-6">
                                  <label class="inline-block mb-2" for="name">Your Name</label>
                                  <input type="text" name="name" value="{{ old('name') }}" class="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" id="name">
                                  <div class="validate"></div>
                                </div>
                                <div class="flex-shrink w-full max-w-full md:w-1/2 px-4 mb-6">
                                  <label class="inline-block mb-2" for="email">Your Email</label>
                                  <input type="email" name="email" value="{{ old('email') }}" class="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"  id="email">
                                  <div class="validate"></div>
                                </div>
                              </div>
                              <div class="mb-6">
                                <label class="inline-block mb-2" for="subject">Subject</label>
                                <input type="text" value="{{ old('subject') }}" class="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" name="subject" id="subject">
                                <div class="validate"></div>
                              </div>
                              <div class="mb-6">
                                <label class="inline-block mb-2" for="messages">Message</label>
                                <textarea  class="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" name="message" rows="10" id="messages">{{ old('message') }}</textarea>
                                <div class="validate"></div>
                              </div>
                              <div class="text-center">
                                <button type="submit" class="py-2.5 px-10 inline-block text-center leading-normal text-gray-100 bg-black border border-black hover:text-white hover:ring-0 focus:outline-none focus:ring-0" href="#project">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" class="inline-block mr-1" fill="currentColor" viewBox="0 0 512 512"><rect x="48" y="96" width="416" height="320" rx="40" ry="40" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><polyline points="112 160 256 272 400 160" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg>
                                       Send message
                                    </button>
                              </div>
                            </form><!-- end contact form -->
                          </div>
                      </div>

                  </div>

              </div><!--  End Content -->


          </main><!-- end main -->

          <footer class="bg-gray-50 text-gray-700">
            <!--Footer content-->
            <div id="footer-content" class="relative pt-8 xl:pt-16 pb-6 xl:pb-12">
              <div class="container xl:max-w-6xl mx-auto px-4 overflow-hidden">
                <div class="flex flex-wrap flex-row lg:justify-between -mx-3">
                  <div class="flex-shrink max-w-full w-full lg:w-2/5 px-3 lg:pr-16">
                    <div class="flex items-center mb-2">
                      <span class="text-3xl leading-normal mb-2 font-bold text-gray-800 mt-2">JiniTalent</span>
                      <!-- <img src="src/img-min/logo.png" alt="LOGO"> -->
                    </div>
                    <p>Find your talented genius with us.</p>
                    <ul class="space-x-3 mt-6 mb-6 Lg:mb-0">
                      <!--facebook-->
                      <li class="inline-block">
                        <a target="_blank" class="hover:text-gray-800" rel="noopener noreferrer" href="https://www.facebook.com/search/top?q=jinitalent&_ps=1" title="Facebook">
                          <!-- <i class="fab fa-facebook fa-2x"></i> -->
                          <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 512 512"><path fill="currentColor" d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"></path></svg>
                        </a>
                      </li>
                      <!--twitter-->
                      <li class="inline-block">
                        <a target="_blank" class="hover:text-gray-800" rel="noopener noreferrer" href="https://twitter.com/jinitalent" title="Twitter">
                          <!-- <i class="fab fa-twitter fa-2x"></i> -->
                          <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 512 512"><path fill="currentColor" d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"></path></svg>
                        </a>
                      </li>
                      <!--youtube-->
                      <li class="inline-block">
                        <a target="_blank" class="hover:text-gray-800" rel="noopener noreferrer" href="https://www.linkedin.com/in/jinitalent/" title="Linkedin">
                          <!-- <i class="fab fa-youtube fa-2x"></i> -->
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </a>
                      </li>

                    </ul>
                  </div>
                  <div class="flex-shrink max-w-full w-full lg:w-3/5 px-3">
                    <div class="flex flex-wrap flex-row">
                      <div class="flex-shrink max-w-full w-1/2 md:w-1/3 mb-6 lg:mb-0">
                        <h4 class="text-base leading-normal mb-3 uppercase text-gray-800">Comming Soon</h4>
                        <ul>
                          <li class="py-1 hover:text-gray-900"><a href="mailto:info@jinitalent.com">Contact</a></li>
                          <li class="py-1 hover:text-gray-900"><a href="{{ route('portal.index') }}">Job Portal</a></li>
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--Start footer copyright-->
            <div class="footer-dark">
              <div class="container xl:max-w-6xl mx-auto px-4 py-4 border-t border-gray-200 border-opacity-10">
                <div class="row">
                  <div class="col-12 col-md text-center">
                    <p class="d-block my-3">Copyright © Jini Talent | by <a href="https://devalnadjom.com" class="hover:text-gray-900">@alnadjom</a></p>
                  </div>
                </div>
              </div>
            </div><!--End footer copyright-->
          </footer><!-- end footer -->

          <!-- =========={ SCROLL TO TOP }==========  -->
          <a href="#" class="back-top fixed p-4 rounded bg-gray-100 border border-gray-100 text-gray-500 dark:bg-gray-900 dark:border-gray-800 right-4 bottom-4 hidden" aria-label="Scroll To Top">
            <svg width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M8 3.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z" clip-rule="evenodd"></path>
              <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8 3.707 5.354 6.354a.5.5 0 11-.708-.708l3-3z" clip-rule="evenodd"></path>
            </svg>
          </a>

          <script type="text/javascript">
           document.addEventListener('alpine:init', () => {
                Alpine.data('jinitalent', () => ({
                    open: false,
                    showloader: true,

                    toggle() {
                        this.open = ! this.open
                    },
                    hideloader(){
                        setTimeout(() =>{this.showloader = false;}, 100);
                    },
                }));
            })
          </script>
    </body>
</html>
