import aws from '../assets/aws.png';
import digitalOcean from '../assets/do.png';
import gcp from '../assets/gcp.png';

export const integrationList: any = {
  'kubernetes': {
    icon: 'https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/kubernetes.png',
    label: 'Kubernetes',
    buttonText: 'Add a Cluster',
  },
  'repo': {
    icon: 'https://3.bp.blogspot.com/-xhNpNJJyQhk/XIe4GY78RQI/AAAAAAAAItc/ouueFUj2Hqo5dntmnKqEaBJR4KQ4Q2K3ACK4BGAYYCw/s1600/logo%2Bgit%2Bicon.png',
    label: 'Git Repository',
    buttonText: 'Add a Repository',
  },
  'registry': {
    icon: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png',
    label: 'Docker Registry',
    buttonText: 'Add a Registry',
  },
  'gke': {
    icon: 'https://sysdig.com/wp-content/uploads/2016/08/GKE_color.png',
    label: 'Google Kubernetes Engine (GKE)',
  },
  'eks': {
    icon: 'https://img.stackshare.io/service/7991/amazon-eks.png',
    label: 'Amazon Elastic Kubernetes Service (EKS)',
  },
  'kube': {
    icon: 'https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/kubernetes.png',
    label: 'Upload Kubeconfig'
  },
  'docker': {
    icon: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png',
    label: 'Docker Hub',
  },
  'gcr': {
    icon: 'https://carlossanchez.files.wordpress.com/2019/06/21046548.png?w=640',
    label: 'Google Container Registry (GCR)',
  },
  'ecr': {
    icon: 'https://avatars2.githubusercontent.com/u/52505464?s=400&u=da920f994c67665c7ad6c606a5286557d4f8555f&v=4',
    label: 'Elastic Container Registry (ECR)',
  },
  'aws': {
    icon: aws,
    label: 'AWS',
  },
  'gcp': {
    icon: gcp,
    label: 'GCP',
  },
  'do': {
    icon: digitalOcean,
    label: 'DigitalOcean',
  }
};

export const getIgnoreCase = (object: any, key: string) => {
  return object[Object.keys(object)
    .find(k => k.toLowerCase() === key.toLowerCase())
  ];
}