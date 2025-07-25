// pipeline {
//   agent any

//   environment {
//     COMPOSE_PROJECT_NAME = 'myfullstackapp'
//   }

//   stages {

// //     stage('Checkout') {
// //       steps {
// //         git 'https://github.com/asriemok/my-fullstack-app.git'
// //       }
// //     }
// // //
// stage('Checkout') {
//   steps {
//     git branch: 'main', url: 'https://github.com/asriemok/my-fullstack-app.git'
//   }
// }

// //
//     // stage('Build & Run with Docker Compose') {
//     //   steps {
//     //     script {
//     //       echo "Starting Docker Compose build..."
//     //       sh 'docker-compose down'
//     //       sh 'docker-compose build'
//     //       sh 'docker-compose up -d'
//     //     }
//     //   }
//     // }
//     stage('Build & Run with Docker Compose') {
//     steps {
//         sh 'docker-compose up -d --build'
//     }
// }

//     stage('Check Running Containers') {
//       steps {
//         sh 'docker ps -a'
//       }
//     }
//   }

//   post {
//     success {
//       echo "✅ Deployment successful!"
//     }
//     failure {
//       echo "❌ Build failed."
//     }
//   }
// }
pipeline {
  agent any

  stages {
    stage('Checkout Code') {
      steps {
        checkout scm
      }
    }

    stage('Build and Run Docker Compose') {
      steps {
        sh 'docker-compose down || true'  // clean up if already running
        sh 'docker-compose up -d --build'
      }
    }

    stage('Verify Containers') {
      steps {
        sh 'docker ps'
      }
    }
  }

  post {
    always {
      sh 'docker-compose down'
    }
  }
}
