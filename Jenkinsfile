pipeline {
  agent any

  environment {
    IMAGE_NAME = 'your-dockerhub-username/websiteclone'  // Change this!
    CONTAINER_NAME = 'websiteclone-container'
  }

  stages {
    stage('Checkout Code') {
      steps {
        git branch: 'main', url: 'https://github.com/kshitijgupta1603/Humankind.git' // Change this!
      }
    }

    stage('Build Docker Image') {
      steps {
        script {
          docker.build(IMAGE_NAME)
        }
      }
    }

    stage('Stop & Remove Old Container') {
      steps {
        script {
          bat "docker rm -f ${CONTAINER_NAME} || echo 'No existing container'"
        }
      }
    }

    stage('Run New Container') {
      steps {
        script {
          bat "docker run -d -p 80:80 --name ${CONTAINER_NAME} ${IMAGE_NAME}"
        }
      }
    }
  }

  post {
    success {
      echo "✅ Deployed Successfully!"
    }
    failure {
      echo "❌ Build or deployment failed. Check the logs for details."
    }
  }
}
